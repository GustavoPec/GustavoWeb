import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

    body{
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
            background: #0b0b0c;

            &::-webkit-scrollbar{
              width: 8px;
            }

            &::-webkit-scrollbar-track{
             background: transparent;
            }

            &::-webkit-scrollbar-thumb{
              background: transparent;
              border-radius: 0rem;
            }
        }

        body, input, textarea, button, span, strong{
          font-family: "inter", sans-serif;
        }

h1, h2, h3, h4, h5, h6 {
  /* font-family: 'Expletus Sans', sans-serif; */
}

button {
    cursor: pointer;
}


/* html{
  @media (max-width: 36rem) {
  ul {
    grid-template-columns: 1fr;
  }
}
} */


`;
