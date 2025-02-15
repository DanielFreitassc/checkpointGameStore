import * as Styles from "./Banner.styles";
import { games } from "../../mock/GamesBanner.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export const Banner = () => {
  return (
    <Styles.BannerContainer>
      <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
        <Styles.Overlay />
        {games.map((game) => (
          <SwiperSlide key={game.id}>
            <img src={game.image} alt={game.name} />
            <h1>{game.name}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </Styles.BannerContainer>
  );
};
