import { ThemeProvider } from "styled-components";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { GlobalStyle } from "./styles/global";
import { useThemeStore } from "./store/themeStore";

export const App = () => {
  const { theme } = useThemeStore();

  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout />
      <GlobalStyle />
    </ThemeProvider>
  );
};
