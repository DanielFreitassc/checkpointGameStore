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
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .swiper {
    width: 100%;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  width: 12rem;
  height: 12rem;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  border-radius: 8px;
`;

export const Slide = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    object-position: center;
    width: 12rem;
    height: 12rem;
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
