//Para usar a API
// import { useGenreData } from "../../hooks/useGenreData";

import * as Styles from "./SectionGenres.styles";
import { genreImages } from "../../data/genreImages";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import genreDataMock from "../../data/mock/genres.json";

export const SectionGenres = () => {
  //Para usar a API
  // const { data } = useGenreData();

  const genreOptionsMock = genreDataMock.genresOptionsMock;

  return (
    <Styles.GenresFilterContainer>
      <h2>Gênero dos Jogos</h2>
      <Swiper
        grabCursor={true}
        modules={[Autoplay]}
        autoplay
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 8 }, // Telas pequenas
          480: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 12 }, // Tablets
          1024: { slidesPerView: 4, spaceBetween: 14 },
          1280: { slidesPerView: 5, spaceBetween: 16 }, // Notebooks
          1536: { slidesPerView: 6, spaceBetween: 16 }, // Telas maiores
        }}
      >
        {genreOptionsMock?.map((genre: any) => (
          <SwiperSlide key={genre.label}>
            <Styles.Overlay />
            <Styles.Slide>
              <h1>{genre.label}</h1>
              <img src={genreImages[genre.genre]} alt="" />
            </Styles.Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </Styles.GenresFilterContainer>
  );
};
