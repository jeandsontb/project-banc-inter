import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      font-family: 'Roboto', sans-serif;
      padding: 0;
      margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({theme}) => theme.colors.background};
  }

  input, button, textarea, select {
    font-family: 'Roboto', sans-serif;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.primary};
  }

  span {
    color: ${({theme}) => theme.colors.primary};
    font-weight: 700;
  }

  .wallet {
    color: ${({theme}) => theme.colors.primary};
    font-size: 30px;
  }

  .primary-color {
    color: ${({theme}) => theme.colors.primary};
    font-weight: 700;
  }
`

export default GlobalStyle;