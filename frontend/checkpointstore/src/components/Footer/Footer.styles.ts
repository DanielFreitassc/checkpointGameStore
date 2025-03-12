import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundFooter};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.125rem clamp(1rem, 5vw, 3.125rem);
  gap: clamp(1rem, 5vw, 3.125rem);
`;
export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 13rem;
  max-width: 1920px;

  h4 {
    font-size: clamp(2rem, 1vw + 1rem, 3rem);
    color: ${({ theme }) => theme.colors.bannerText};
  }

  span {
    color: ${({ theme }) => theme.colors.bannerButton};
  }
  @media (max-width: 970px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h4 {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.bannerText};
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  p {
    font-size: clamp(1rem, 1vw + 1rem, 2rem);
    color: ${({ theme }) => theme.colors.bannerText};
  }
`;

export const LinksLogos = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FooterAbout = styled.div`
  p {
    color: ${({ theme }) => theme.colors.textFooter};
  }
  @media (max-width: 480px) {
    font-size: clamp(0.75rem, 1vw + 1rem, 4rem);
  }
`;
