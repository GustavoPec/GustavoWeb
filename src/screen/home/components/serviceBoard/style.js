import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.div`
  ${(props) => props}
`;

export const Title = styled.div`
  width: 15rem;
`;

export const Board = styled.div`
  width: 16rem;
  height: 13rem;
  margin-top: 1rem;
  padding: 1rem;
  /* background: linear-gradient(45deg, #1b1464, #731aff 50%, #1b1464); */
  /* border-radius: 2rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* box-shadow: 5px 5px 30px #1b1464, -5px -5px 30px #1b1464; */
  background: #f8f8ff80;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid #f8f8ff90;
`;

export const Button = styled.div``;
