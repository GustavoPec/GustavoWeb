import styled from "styled-components";

export const Main = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  
  

  @media (max-width: 767px) {
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 190px;
  }
`;

export const List = styled.div`
  width: 70%;

  @media (max-width: 767px) {
    display: none;
  }

  ul {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    font-size: 20px;
    gap: 25px;
    margin-right: 25px;

    li {
      list-style: none;
      padding: 0;
      border: 5px solid transparent;
      color: white;
      text-decoration: none;

      &:hover {
        border-style: solid;
        border-width: 5px;
        border-image: linear-gradient(to right, #731aff, #1b1464);
        border-image-slice: 0 0 100% 0;
      }
    }

    a {
      color: white;
      text-decoration: none;
    }
  }
`;
