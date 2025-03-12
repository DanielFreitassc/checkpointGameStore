import { useParams } from "react-router-dom";
import { useGamesData } from "../../hooks/useGamesData";
import * as Styles from "./GameInfo.styles";
export const GameInfo = () => {
  const { id } = useParams();
  const { data: gamesData } = useGamesData({});

  if (!gamesData || !gamesData.content) {
    return <p>Carregando...</p>;
  }

  const game = gamesData.content.find(
    (game) => game.id === parseInt(id || "0")
  );

  if (!game) {
    return <h2>Jogo não encontrado.</h2>;
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
