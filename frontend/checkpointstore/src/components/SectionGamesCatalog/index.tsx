import { useState } from "react";
import * as Styles from "./SectionGamesCatalog.styles";
import Select from "react-select";
import { useGenreStore } from "../../store/genreStore";
// import { useGenreData } from "../../hooks/useGenreData";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import gamesCatalogDataMock from "../../data/mock/games.json";
import genreDataMock from "../../data/mock/genres.json";

export const SectionGamesCatalog = () => {
  const { selectedGenre, setSelectedGenre } = useGenreStore();
  const [page, setPage] = useState(0);
  const size = 6;

  // ==================================================
  // LÓGICA COM DADOS MOCKADOS (games.json)
  // ==================================================

  const gamesCatalog = gamesCatalogDataMock.gamesCatalog;
  const genreOptionsMock = genreDataMock.genresOptionsMock;

  const genreOptions =
    genreOptionsMock.map((genre) => ({
      value: genre.genre,
      label: genre.label,
    })) || [];

  // Filtra os jogos com base no gênero selecionado
  const filteredGames = selectedGenre
    ? gamesCatalog.filter((game) => {
        const selectedGenreLabel = genreOptions.find(
          (option) => option.value === selectedGenre
        )?.label;
        return game.label === selectedGenreLabel;
      })
    : gamesCatalog;

  // Aplica a paginação
  const startIndex = page * size;
  const endIndex = startIndex + size;
  const paginatedGames = filteredGames.slice(startIndex, endIndex);

  // Calcula o número total de páginas
  const pageCount = Math.ceil(filteredGames.length / size);

  // ==================================================
  // LÓGICA COM API (COMENTADA)
  // Caso queira usar a API, descomente o código abaixo e comente a lógica de dados mockados acima.
  // ==================================================

  // const {
  //   data: genreData,
  //   isLoading: isGenreLoading,
  //   isError: isGenreError,
  // } = useGenreData();
  /*

  const {
    data: gamesData,
    isLoading: isGamesLoading,
    isError: isGamesError,
  } = useGamesData({
    page,
    genre: selectedGenre,
    size,
  });

  const paginatedGames = gamesData?.content || [];
  const pageCount = gamesData?.totalPages || 0;
  */

  const handleGenreChange = (selectedOption: any) => {
    setSelectedGenre(selectedOption?.value);
    setPage(0);
  };

  const handlePageClick = (data: { selected: number }) => {
    setPage(data.selected);
  };

  return (
    <Styles.GamesCatalogContainer>
      <Styles.GamesCatalogFilter>
        <h1>Todos os Jogos</h1>
        <Styles.GameCatalogFilter>
          <Select
            className="selectInput"
            options={genreOptions}
            onChange={handleGenreChange}
            placeholder="Selecione um gênero"
            // isDisabled={isGenreLoading || isGenreError}
          />
        </Styles.GameCatalogFilter>
      </Styles.GamesCatalogFilter>

      {/* Lista de jogos */}
      <Styles.GameListContainer>
        {paginatedGames.map((game) => (
          <Link to={`/games/${game.id}`} key={game.id}>
            <Styles.CardGames>
              <img src={game.image} alt={game.name} />
              <Styles.CardGamesInfo>
                <h2>{game.name}</h2>
                <span>{game.label}</span>
                <p>R$ {game.price}</p>
              </Styles.CardGamesInfo>
            </Styles.CardGames>
          </Link>
        ))}
      </Styles.GameListContainer>

      {/* Paginação */}
      <Styles.Paginacao>
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          forcePage={page}
          previousLabel="Anterior"
          nextLabel="Próxima"
          breakLabel="..."
          containerClassName="pagination"
          activeClassName="active"
          disabledClassName="disabled"
        />
      </Styles.Paginacao>
    </Styles.GamesCatalogContainer>
  );
};
