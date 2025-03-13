import styled from "styled-components";

export const GameInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: clamp(1rem, 6vw, 2rem);
  gap: clamp(1rem, 16vw, 4rem);

  img {
    width: 80%;
    height: clamp(10px, 80vw, 550px);
    border-radius: 20px;
    object-fit: cover;
    object-position: center;
  }
  p {
    background-color: ${({ theme }) => theme.colors.tagBackground};
    color: ${({ theme }) => theme.colors.tagText};
    padding: 3rem 3rem;
    border-radius: 20px;
    text-align: start;
    font-size: clamp(0.8rem, 8vw, 1.25rem);
    margin-bottom: 2rem;
    width: 80%;
  }
`;

export const GameInfoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  flex-wrap: wrap;

  h2 {
    font-size: clamp(0.5rem, 8vw, 2.25rem);
    padding-bottom: 0.5rem;
    border-bottom: 3px solid ${({ theme }) => theme.colors.tagBackground};
    @media (max-width: 689px) {
      margin-inline: auto;
      text-align: center;
    }
  }
  span {
    background-color: ${({ theme }) => theme.colors.tagGameInfoBackGround};
    color: ${({ theme }) => theme.colors.tagGameInfoBackText};
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: clamp(0.5rem, 8vw, 1.25rem);

    @media (max-width: 689px) {
      margin-top: 2rem;
      margin-inline: auto;
    }
  }
`;


export const NotFoundGame = styled.h2`
  display: flex;
  justify-content: center;
  font-size: clamp(0.8rem, 4vw + 1rem, 2rem);
  border-bottom: 3px solid ${({ theme }) => theme.colors.tagBackground};
  padding-bottom: 1rem;
  text-align: center;

`