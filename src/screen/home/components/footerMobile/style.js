import styled from "styled-components";

export const Main = styled.div`
  display: none;
  @media (max-width: 767px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #6d3eff;
    color: white;
    gap: 50px;
    padding-top: 40px;
    padding-bottom: 40px;

    img {
      width: 180px;
    }
  }

  .Footer-title {
    @media (max-width: 767px) {
      width: 100%;
      display: flex;
      justify-content: center;

      i {
        font-size: 80px;
      }
    }
  }

  .Footer-contact {
    @media (max-width: 767px) {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: center;
      gap: 60px;
    }
  }

  .Footer-list {
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      font-size: 18px;

      span {
        margin-bottom: 20px;
        font-weight: bold;
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;

        li {
          cursor: pointer;
          list-style: none;
          padding: 0;
          text-align: center;
        }

        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
`;
