import styled from "styled-components";

export const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

export const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 45rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    position: absolute;
    color: white;
    font-size: 3rem;
    font-weight: bold;
    z-index: 3;
  }
`;
