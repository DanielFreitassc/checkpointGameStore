import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
  padding: 2rem 5.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: ${({ theme }) => theme.colors.bannerText};
  }
  span {
    color: ${({ theme }) => theme.colors.bannerButton};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;
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
  background: rgba(0, 0, 0, 0.5);
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
