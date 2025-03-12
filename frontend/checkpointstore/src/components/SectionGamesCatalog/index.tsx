import { useState } from "react";
import * as Styles from "./SectionGamesCatalog.styles";
import Select from "react-select";
import { useGenreStore } from "../../store/genreStore";
import { useGamesData } from "../../hooks/useGamesData";
import { useGenreData } from "../../hooks/useGenreData";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

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
  const handlePageClick = (data: any) => {
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
            isDisabled={isGenreLoading || isGenreError}
          />
        </Styles.GameCatalogFilter>
      </Styles.GamesCatalogFilter>

      {isGenreLoading && <div>Carregando gêneros...</div>}
      {isGenreError && <div>Erro ao carregar os gêneros.</div>}

      {isGamesLoading && <div>Carregando jogos...</div>}
      {isGamesError && <div>Erro ao carregar os jogos.</div>}

      {/* Lista de jogos */}
      <Styles.GameListContainer>
        {gamesData?.content?.map((game) => (
          <Link to={`/games/${game.id}`}>
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
          pageCount={gamesData?.totalPages} // Total de páginas
          pageRangeDisplayed={3} // Número de páginas visíveis
          marginPagesDisplayed={1} // Número de páginas nas bordas
          onPageChange={handlePageClick} // Função ao mudar de página
          forcePage={page} // Página atual (baseada em 0)
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
