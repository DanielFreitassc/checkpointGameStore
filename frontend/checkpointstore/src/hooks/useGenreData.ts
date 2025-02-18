import { useQuery } from "@tanstack/react-query";
import { Api } from "../services/Api";
import { GenreData } from "../types/genre-data";

const fetchGenre = async (): Promise<GenreData[]> => {
  const response = await Api.get("/games/genres");
  return response.data;
};

export const useGenreData = () => {
  const query = useQuery({
    queryKey: ["genre"],
    queryFn: fetchGenre,
  });
  return query;
};
