import styled from "styled-components";

export const Main = styled.div`
  .Main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 130px;
    transition: 0.2s;

    &:hover {
      color: white;
    }

    .Main:hover .Button {
      color: white;
    }
  }
  span{
    margin-bottom: 5px;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 15px;
  border-radius: 5rem;
  
  font-size: 20px;
  cursor: pointer;
  border: 3px solid #731aff;
`;
