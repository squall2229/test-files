import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }

  ul {
    list-style: none;
    padding-left: 10px;
  }
`
