import * as Styles from "./Banner.styles";
import { games } from "../../data/GamesBanner.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <Styles.BannerContainer>
      <Swiper spaceBetween={0} slidesPerView={1} loop={true} grabCursor={true}>
        {games.map((game) => (
          <SwiperSlide key={game.id}>
            <Styles.Slide>
              <Styles.Overlay />
              <img src={game.image} alt={game.name} />
              <div className="content-banner">
                <h1>{game.name}</h1>
                <p>{game.description}</p>
                <div className="content-banner-button">
                  <Link to={`/games/${game.id}`}>
                    <button>Saiba Mais+</button>
                  </Link>
                </div>
              </div>
            </Styles.Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </Styles.BannerContainer>
  );
};
