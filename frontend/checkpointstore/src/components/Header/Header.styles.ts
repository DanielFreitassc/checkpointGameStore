import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  position: absolute;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
  padding: 2rem 5.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 5px solid ${({ theme }) => theme.colors.bannerButton};

  h2 {
    color: ${({ theme }) => theme.colors.backGroundText};
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
