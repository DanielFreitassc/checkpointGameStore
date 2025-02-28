import { create } from "zustand";

interface genreStore {
  selectedGenre: string | undefined;
  setSelectedGenre: (genre: string | undefined) => void;
}

export const useGenreStore = create<genreStore>((set) => ({
  selectedGenre: undefined,
  setSelectedGenre: (genre) => set({ selectedGenre: genre }),
}));
