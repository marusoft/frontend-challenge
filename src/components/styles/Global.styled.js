import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    /* color: hsl(192, 100%, 9%); */
    font-family: 'Poppins', sans-serif;
    /* font-size: 1.15em; */
    overflow: hidden;
  }
  ul{
    list-style: none;
  }

  /* img {
    max-width: 100%;
  } */
`;
export default GlobalStyles;
