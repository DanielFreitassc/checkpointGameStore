import { useState } from "react";
import * as Styles from "./SectionGamesCatalog.styles";
import Select from "react-select";
import { useGenreStore } from "../../store/genreStore";
import { useGamesData } from "../../hooks/useGamesData";
import { useGenreData } from "../../hooks/useGenreData";

export const SectionGamesCatalog = () => {
  const { selectedGenre, setSelectedGenre } = useGenreStore();
  const [page, setPage] = useState(0);
  const size = 6;

  const {
    data: genreData,
    isLoading: isGenreLoading,
    isError: isGenreError,
  } = useGenreData();

  const {
    data: gamesData,
    isLoading: isGamesLoading,
    isError: isGamesError,
  } = useGamesData({
    page,
    genre: selectedGenre,
    size,
  });

  const genreOptions =
    genreData?.map((genre) => ({
      value: genre.genre,
      label: genre.label,
    })) || [];

  const handleGenreChange = (selectedOption: any) => {
    setSelectedGenre(selectedOption?.value);
    setPage(0);
  };

  return (
    <Styles.GamesCatalogContainer>
      <Styles.GamesCatalogFilter>
        <h1>Todos os Jogos</h1>

        {/* Select para escolher o gênero */}
        <Styles.GameCatalogFilter>
          <Select
            className="selectInput"
            options={genreOptions}
            onChange={handleGenreChange}
            placeholder="Selecione um gênero"
            isDisabled={isGenreLoading || isGenreError}
          />
        </Styles.GameCatalogFilter>
      </Styles.GamesCatalogFilter>

      {/* {isGenreLoading && <div>Carregando gêneros...</div>}
      {isGenreError && <div>Erro ao carregar os gêneros.</div>}

      {isGamesLoading && <div>Carregando jogos...</div>}
      {isGamesError && <div>Erro ao carregar os jogos.</div>} */}

      {/* Lista de jogos */}
      <Styles.GameListContainer>
        {gamesData?.content?.map((game) => (
          <Styles.CardGames>
            <img src={game.image} alt={game.name} />
            <Styles.CardGamesInfo>
              <h2>{game.name}</h2>
              <span>{game.label}</span>
              <p>R$ {game.price}</p>
            </Styles.CardGamesInfo>
          </Styles.CardGames>
        ))}
      </Styles.GameListContainer>

      {/* Paginação */}
      <Styles.Paginacao>
        <div>
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 0 || isGamesLoading}
          >
            Anterior
          </button>
          <span>
            Página {page + 1} de {gamesData?.totalPages}
          </span>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={gamesData?.last || isGamesLoading}
          >
            Próxima
          </button>
        </div>
      </Styles.Paginacao>
    </Styles.GamesCatalogContainer>
  );
};
