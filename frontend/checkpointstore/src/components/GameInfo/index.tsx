import { useParams } from "react-router-dom";
// import { useGamesData } from "../../hooks/useGamesData";
import * as Styles from "./GameInfo.styles";
import gamesDataMock from "../../data/mock/games.json";
export const GameInfo = () => {
  const { id } = useParams();
  // const { data: gamesData } = useGamesData({});
  const gamesCatalog = gamesDataMock.gamesCatalog;

  if (!gamesCatalog || !gamesCatalog) {
    return (
      <Styles.NotFoundGame>
        Carregando informações do jogo...
      </Styles.NotFoundGame>
    );
  }

  const game = gamesCatalog.find((game) => game.id === parseInt(id || "0"));

  if (!game) {
    return (
      <Styles.NotFoundGame>Sem informações para esse Jogo.</Styles.NotFoundGame>
    );
  }

  return (
    <Styles.GameInfoContainer>
      <img src={game.image} alt={game.name} />
      <Styles.GameInfoTitle>
        <h2>{game.name}</h2>
        <span>{game.label}</span>
      </Styles.GameInfoTitle>
      <p>{game.description}</p>
    </Styles.GameInfoContainer>
  );
};
