import styled from "styled-components";

export const GamesCatalogContainer = styled.section`
  margin-top: 7.25rem;
`;

export const GamesCatalogFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.75rem;

  h1 {
    font-size: 2.25rem;
  }
`;
export const GameCatalogFilter = styled.div`
  color: ${({ theme }) => theme.colors.selectTextColor};
  .selectInput {
    width: 100%;
    min-width: 150px;
  }
`;

export const GameListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, clamp(250px, 60vw, 367px));
  grid-template-rows: repeat(2, minmax(100px, auto));
  gap: 4rem;
  justify-content: center;
`;

export const CardGames = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  img {
    height: clamp(400px, 60vh, 484px);
    object-fit: cover;
    border-radius: 20px;
  }
`;
export const CardGamesInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  flex-direction: column;
  text-align: left;
  h2 {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.backGroundText};
  }

  span {
    background-color: ${({ theme }) => theme.colors.tagBackground};
    width: fit-content;
    padding: 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.bannerText};
  }
  p {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

export const Paginacao = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
