import styled from "styled-components";

export const Main = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 16vh;
  background: #0b0b0c;
  padding-left: 20px;
  padding-right: 20px;

  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: #6d3eff;
    transform-origin: 50%;
    z-index: 2;

    @media (max-width: 767px) {
      position: fixed;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 180px;
  }
`;

export const List = styled.div`
  width: 70%;

  @media (max-width: 767px) {
    display: none;
  }

  .Links {
    display: flex;
    flex-direction: row;
    gap: 40px;
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
      transition: all 0.3s ease;
    }

    a {
      color: white;
      text-decoration: none;
      position: relative;
      padding-bottom: 5px;

      &::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 0;
        bottom: 0;
        left: 0;
        background: #731aff;
        transition: all 0.3s ease;
      }

      &:hover::after {
        width: 70%;
      }
    }
  }
`;
