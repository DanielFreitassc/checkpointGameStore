import styled from "styled-components";

export const GamesCatalogContainer = styled.section`
  margin-top: 7.25rem;
`;

export const GamesCatalogFilter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 5rem;
  margin-inline: auto;
  gap: clamp(2rem, 12vw, 2rem);

  h1 {
    font-size: clamp(2rem, 4vw + 1rem, 3rem);
    text-align: center;
  }
  @media (max-width: 718px) {
    justify-content: center;
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
    height: clamp(200px, 30vw, 484px);
    object-fit: cover;
    border-radius: 20px;
  }
  &:hover {
    transform: scale(1.1);
    transition: transform ease-in-out 0.2s;
    cursor: pointer;
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
  .pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 8rem;
  }

  .pagination li {
    margin: 0 0.5rem;
  }

  .pagination li a {
    padding: 8px 12px;
    border: 2px solid ${({ theme }) => theme.colors.tagBackground};
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  .pagination li a:hover {
    background-color: ${({ theme }) => theme.colors.tagBackground};
    color: white;
  }

  .pagination .active a {
    background-color: ${({ theme }) => theme.colors.tagBackground};
    color: ${({ theme }) => theme.colors.bannerText};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .pagination .disabled a {
    color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.colors.textFooter};
  }

  .pagination .disabled a:hover {
    background-color: ${({ theme }) => theme.colors.textFooter};
  }
`;


export const Messages = styled.h2`
  display: flex;
  justify-content: center;
  font-size: clamp(0.8rem, 4vw + 1rem, 2rem);
  border-bottom: 3px solid ${({ theme }) => theme.colors.tagBackground};
  padding-bottom: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`