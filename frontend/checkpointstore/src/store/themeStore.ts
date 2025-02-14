import { create } from "zustand";
import { darkTheme } from "../styles/themes/darkTheme";
import { lightTheme } from "../styles/themes/lightTheme";

type ThemeStore = {
  theme: typeof darkTheme;
  changeTheme: () => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: darkTheme,
  changeTheme: () =>
    set((state) => ({
      theme: state.theme.name === "dark" ? lightTheme : darkTheme,
    })),
}));
