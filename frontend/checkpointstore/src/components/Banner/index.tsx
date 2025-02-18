import * as Styles from "./Banner.styles";
import { games } from "../../data/GamesBanner.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export const Banner = () => {
  return (
    <Styles.BannerContainer>
      <Swiper spaceBetween={0} slidesPerView={1} loop={true} grabCursor={true}>
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
  );
};
