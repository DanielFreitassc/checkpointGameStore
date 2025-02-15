import styled from "styled-components";

export const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  pointer-events: none;

  @media (max-width: 768px) {
    height: 18.75rem;
  }

  @media (max-width: 480px) {
    height: 15.625rem;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 6;
`;

export const BannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  text-align: center;
  color: white;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }

  img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
  }
`;
