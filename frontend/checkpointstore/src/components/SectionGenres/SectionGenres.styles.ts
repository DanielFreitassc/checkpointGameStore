import styled from "styled-components";

export const GenresFilterContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;

  h2 {
    font-size: clamp(1.5rem, 2.5vw, 4rem);
    font-weight: 500;
    margin-bottom: clamp(1rem, 2vw, 2rem);
  }

  .swiper {
    width: 100%;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  width: clamp(5rem, 100vw, 12rem);
  height: clamp(5rem, 100vw, 12rem);
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  border-radius: 8px;
`;

export const Slide = styled.div`
  position: relative;
  width: clamp(8rem, 80vw, 12rem);
  height: clamp(8rem, 80vw, 12rem);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    object-position: center;
    width: clamp(8rem, 80vw, 12rem);
    height: clamp(8rem, 80vw, 12rem);
    border-radius: 8px;
    z-index: 1;
    box-shadow: 0px 0px 20px 0px rgba(140, 131, 131, 0.35);
  }

  h1 {
    position: absolute;
    color: white;
    font-size: 1.25rem;
    font-weight: 700;
    z-index: 3;
  }
`;
