import styled from "styled-components";

export const Main = styled.div`
  width: 170px;
  height: 170px;
  background: #731aff;
  border-left: 8px solid;
  border-image: linear-gradient(to bottom, #731aff, #1b1464);
  border-image-slice: 0 0 0 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
  transition: 0.2s;
  border-radius: 10px;

  @media (max-width: 767px) {
    width: 140px;
    height: 140px;
  }

  &:hover {
    scale: 1.1;
    z-index: 1;

    @media (max-width: 767px) {
      &:hover {
        scale: 1;
      }
    }
  }

  img {
    width: 90px;

    @media (max-width: 767px) {
      width: 70px;
    }
  }
`;
