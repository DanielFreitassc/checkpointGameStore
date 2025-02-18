import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
}

body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.backgroundText};
}

body, input, textarea, button {
    font-family: "Lexend", serif;
    font-weight: 400;
    font-size: 1rem;
}
    
:focus {
    outline: none;
}

`;
