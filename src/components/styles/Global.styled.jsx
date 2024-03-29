import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    /* background: ${({ theme }) => theme.colors.body}; */
    font-family: 'Poppins', sans-serif;
    font: inherit;
    /* overflow: hidden; */
  }
  ul{
    list-style: none;
  }
  @media (max-width: 920px) {
    body {
     
    }
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
export default GlobalStyles;
