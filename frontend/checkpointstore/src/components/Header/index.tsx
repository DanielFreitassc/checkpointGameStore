import * as Styles from "./Header.styles";
import { useThemeStore } from "../../store/themeStore";
import { Sun, Moon } from "lucide-react";
import Switch from "react-switch";
import { games } from "../../mock/GamesBanner.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export const Header = () => {
  const { changeTheme, theme } = useThemeStore();

  return (
    <Styles.HeaderContainer>
      <Styles.Header>
        <h2>
          CheckPoint<span>Store</span>
        </h2>
        <Switch
          onChange={changeTheme}
          checked={theme.name === "dark"}
          checkedIcon={<Sun size={20} color="white" />}
          uncheckedIcon={<Moon size={20} color="white" />}
          onColor={theme.colors.background}
          offColor="#bbb"
          onHandleColor="#fff"
          offHandleColor="#999"
          width={60}
          height={30}
        />
      </Styles.Header>

      <Styles.BannerContainer>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
        >
          {games.map((game) => (
            <SwiperSlide key={game.id}>
              <Styles.Slide>
                <Styles.Overlay />
                <img src={game.image} alt={game.name} />
                <h1>{game.name}</h1>
              </Styles.Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      </Styles.BannerContainer>
    </Styles.HeaderContainer>
  );
};
