import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 5rem;
  width: 15rem;
  height: 3rem;
  color: white;
  font-size: 20px;
  background: linear-gradient(to right, #731aff, #1b1464);
  cursor: pointer;
  transition: 0.2s;
  padding: 0.2rem;

  &:hover {
    box-shadow: 0px 0px 15px #1b1464;
  }

  @media (max-width: 1100px) {
    font-size: 15px;
    width: 14rem;
  }

  @media (max-width: 767px) {
    width: 10rem;
    font-size: 14px;
  }
`;
