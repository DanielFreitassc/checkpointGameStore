import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundFooter};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.125rem 5.75rem;
  gap: 5.313rem;
`;
export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 13rem;
  max-width: 1920px;

  h4 {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.bannerText};
  }

  span {
    color: ${({ theme }) => theme.colors.bannerButton};
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 480px) {
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
  gap: 1.563rem;

  p {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.bannerText};
  }
`;

export const LinksLogos = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const FooterAbout = styled.div`
  p {
    color: ${({ theme }) => theme.colors.textFooter};
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
