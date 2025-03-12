import styled from "styled-components";

export const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  height: clamp(45rem, 55vw, 55rem);
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
  height: clamp(45rem, 70vw, 70rem);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content-banner {
    position: absolute;
    display: flex;
    gap: clamp(2rem, 3vw, 6rem);
    width: 100%;
    padding: clamp(1rem, 7vw, 7rem);
    flex-direction: column;
    align-items: center;
    z-index: 3;
    margin-inline: auto;
    h1 {
      color: ${({ theme }) => theme.colors.bannerText};
      font-size: clamp(1.5rem, 4vw, 4rem);
      font-weight: bold;
    }
    p {
      font-size: clamp(1rem, 2vw, 2rem);
      color: ${({ theme }) => theme.colors.bannerText};
    }
    .content-banner-button {
      button {
        padding-inline: clamp(1rem, 2vw, 2.5rem);
        padding-block: clamp(1rem, 2vw, 1.5rem);
        border-radius: 8px;
        background: ${({ theme }) => theme.colors.bannerButton};
        color: ${({ theme }) => theme.colors.bannerText};

        border: none;
        cursor: pointer;
        font-size: clamp(1rem, 2vw, 1.5rem);
      }
      button:hover {
        transform: scale(1.1);
        transition: transform 0.1s ease-in-out;
      }
    }
  }
`;
