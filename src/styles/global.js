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

            &::-webkit-scrollbar{
              width: 8px;
            }

            &::-webkit-scrollbar-track{
             background: #19013b;
            }

            &::-webkit-scrollbar-thumb{
              background: white;
              border-radius: 1rem;
            }
        }

        body, input, textarea, button, span, strong{
          font-family: "quicksand", sans-serif;
        }

h1, h2, h3, h4, h5, h6 {
  font-family: 'Expletus Sans', sans-serif;
}

button {
    cursor: pointer;
}


html{
  @media (max-width: 36rem) {
  ul {
    grid-template-columns: 1fr;
  }
}
}


`;
