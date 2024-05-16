import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 40px;
  color: white;
  font-size: 20px;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.2s;
  padding: 1px;
  overflow: hidden;
  background: transparent;
  z-index: 1;

  &::before {
    content: "";
    background: linear-gradient(to right, #731aff, #1b1464);
    position: absolute;
    inset: 0;
    z-index: -1;
    transition: transform 400ms ease;
    transform-origin: right;
    transform: scaleX(0);
    border-radius: 50px;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }

  @media (max-width: 1100px) {
    font-size: 15px;
    width: 14rem;
  }

  @media (max-width: 767px) {
    width: 10rem;
  }
`;
