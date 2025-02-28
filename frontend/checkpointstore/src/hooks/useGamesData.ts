import { useQuery } from "@tanstack/react-query";
import { Api } from "../services/Api";
import { GameDataApiResponse } from "../types/game-data";

interface UseGamesDataParams {
  page: number;
  genre?: string;
  size: number;
}

const fetchGames = async (
  page: number,
  size: number,
  genre?: string
): Promise<GameDataApiResponse> => {
  const genreParam = genre ? `&genre=${genre}` : "";
  const response = await Api.get(
    `/games?page=${page}&size=${size}${genreParam}`
  );
  return response.data;
};

export const useGamesData = ({ page, genre, size }: UseGamesDataParams) => {
  return useQuery<GameDataApiResponse>({
    queryKey: ["games", page, size, genre],
    queryFn: () => fetchGames(page, size, genre),
  });
};
