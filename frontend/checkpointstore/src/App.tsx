import { ThemeProvider } from "styled-components";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/darkTheme";

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <DefaultLayout />
      <GlobalStyle />
    </ThemeProvider>
  );
};
