import { ThemeProvider } from "styled-components";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { GlobalStyle } from "./styles/global";
import { useThemeStore } from "./store/themeStore";
import { useEffect } from "react";

export const App = () => {
  const { theme } = useThemeStore();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout />
      <GlobalStyle />
    </ThemeProvider>
  );
};
