import styled from "styled-components";

export const Main = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  border: none;
  background: #f8f8ff;

  h2 {
    font-size: 60px;
  }

  @media (max-width: 767px) {
    background: #0b0b0c;
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  background: #0b0b0c;
  align-items: center;
  justify-content: center;
`;

export const Profile = styled.div`
  width: 100%;
  height: 84vh;
  background: #0b0b0c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 84vh;
  }
`;

export const ProfileSquares = styled.div`
  width: 100%;
  height: 84vh;
  display: flex;
  align-items: center;
  pointer-events: all;
  z-index: 0;

  @media (max-width: 767px) {
    display: none;
  }

  .container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-row: auto;
    grid-template-columns: repeat(57, 45px);
    grid-template-rows: repeat(45, 45px);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    overflow: hidden;
    align-items: center;

    .square-colors {
      width: 45px;
      height: 45px;
      display: flex;
      border: 1px solid #1c1c1e;
      border-radius: 5px;
      background: transparent;

      &:hover {
        background: #6d3eff;
      }

      &:not(:hover) {
        transition: ease-out 2s;
        background: transparent;
      }
    }
  }
`;

export const ProfileSpace = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 60px;
  z-index: 1;
  position: absolute;
  pointer-events: none;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h2 {
      font-size: 35px;
      @media (max-width: 767px) {
        margin-bottom: 20px;
      }
    }
  }
`;

export const ProfileInfos = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 650px;
  height: 25rem;
  width: fit-content;
  pointer-events: none;
  z-index: 1;
  align-items: center;
  color: #f8f8ff;

  .Profile-space {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 767px) {
      .typed {
        margin-bottom: 40px;
      }
    }
  }

  .Title {
    h2 {
      display: flex;
      flex-direction: row;
      font-size: 80px;
      margin-bottom: 20px;
    }
  }

  .Desc {
    font-size: 18px;
    text-align: center;

    span {
      font-weight: bold;
      color: #6d3eff;
    }
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: auto;
    text-align: center;

    .Title {
      margin-bottom: 20px;
    }

    .Desc {
      width: 100%;
      color: #f8f8ff;
      font-size: 21px;

      @media (max-width: 767px){
        p{
          width: 90vw;
          font-size: 18px;
        }
      }
    }
  }
`;

export const ProfileIcons = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: fit-content;

    @media (max-width: 767px) {
      flex-direction: column;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      cursor: pointer;
      width: auto;
      gap: 0.5rem;
      color: #6d3eff;
      transition: 0.5s;
      width: fit-content;
      padding: 8px;
      border-radius: 10px;
      color: #f8f8ff;
      @media (max-width: 767px) {
        width: 100%;
      }

      &:nth-of-type(1) {
        border: 2px solid #6d3eff;

        &:hover {
          color: #6d3eff;
        }
      }

      &:nth-of-type(2) {
        background: #6d3eff;
        border: 2px solid #6d3eff;

        &:hover {
          color: #6d3eff;
          background: #f8f8ff;
          border: 2px solid #f8f8ff;
          @media (max-width: 767px) {
            color: #f8f8ff;
            background: #6d3eff;
          }
        }
      }

      &:hover {
        @media (max-width: 767px) {
          color: #6d3eff;
        }
      }

      i {
        font-size: 38px;
      }
    }
  }
`;

export const Text = styled.div`
  ${(props) => props}
`;

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #0b0b0c;
  overflow: hidden;

  @media (max-width: 767px) {
    display: none;
  }

  h2 {
    color: #f8f8ff;
  }
`;

export const ServicesSpaces = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 20px;

  .motionServices {
    display: flex;
    flex-direction: row;
    position: relative;
  }

  .ColumnServices {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    gap: 20px;

    img {
      object-fit: cover;
      width: 280px;
    }

    &:nth-of-type(1) {
      top: -45%;
    }
    &:nth-of-type(2) {
      top: -35%;
    }
    &:nth-of-type(3) {
      top: -35%;
    }
    &:nth-of-type(4) {
      top: 75%;
    }
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
`;

export const ServicesMobile = styled.div`
  display: none;

  @media (max-width: 767px) {
    background: #0b0b0c;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    padding-top: 40px;
    padding-bottom: 40px;

    img {
      width: 80%;
    }

    .motion-div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Projects = styled.div`
  width: 100%;
  height: 100vh;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;

  @media (max-width: 767px) {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ProjectsSpace = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 767px) {
    margin-top: 50px;
    gap: 50px;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 380px;
    height: 250px;
    gap: 20px;

    @media (max-width: 767px) {
      width: 90vw;
      height: 200px;
    }
  }
`;

export const ProjectCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Footer = styled.div`
  width: 100%;
  height: 80vh;
  background: #6d3eff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 767px) {
    display: none;
  }
  span {
    font-size: 20px;
  }
`;

export const FooterLimit = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1300px;
  display: flex;
`;

export const FooterSpace = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f8f8ff;
  padding-top: 100px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 100px;

  .Footer-column {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 180px;
    }
  }

  .Footer-column-contact-title {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 30px;
    gap: 20px;
    line-height: 50px;
    i {
      font-size: 80px;
    }
  }

  .Footer-column-contact-link {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .Footer-column-contact-list {
    display: flex;
    flex-direction: column;

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
          background: #f8f8ff;
          transition: all 0.3s ease;
        }

        &:hover::after {
          width: 70%;
        }
      }
    }
  }
`;
