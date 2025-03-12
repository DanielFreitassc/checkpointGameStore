import styled from "styled-components";

export const HeaderContainer = styled.div``;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  z-index: 4;
  padding: clamp(1.5rem, 5vw, 2rem) clamp(1.5rem, 5vw, 5.75rem);
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 5px solid ${({ theme }) => theme.colors.bannerButton};
`;
export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1920px;
  margin-inline: auto;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 215px) {
    gap: 1rem;
    display: flex;
    justify-content: center;
  }

  a {
    color: inherit;
    &:hover {
      transition: transform ease-in-out 0.2s;
      transform: scale(1.05);
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.backGroundText};
    font-size: clamp(0.8rem, 5vw, 2rem);
  }
  span {
    color: ${({ theme }) => theme.colors.bannerButton};
    font-size: clamp(0.8rem, 5vw, 2rem);
  }
`;

export const SwitchIcon = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
`;
