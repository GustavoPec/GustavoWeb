import styled from "styled-components";
import bgprofile from "../../assets/bgprofile.png";

export const Main = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  border: none;

  h2 {
    font-size: 60px;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .Wave {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  backdrop-filter: blur(5px);

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Profile = styled.div`
  width: 100%;
  height: 680px;
  background-image: url(${bgprofile});
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: content-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1100px;
  }
`;

export const ProfileSpace = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 30px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .Person {
    @media (max-width: 767px) {
      width: 320px;
    }
  }
`;

export const ProfileInfos = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 650px;
  height: 25rem;

  .Title {
    margin-left: 5px;
  }

  .Desc {
    width: 400px;
    color: white;
    font-size: 21px;
    margin-left: 5px;
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
      color: white;
      font-size: 21px;
      margin-bottom: 20px;
    }
  }
`;

export const ProfileIcons = styled.div`
  color: #731aff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: auto;
    gap: 10px;

    li {
      display: flex;
      align-items: center;
      flex-direction: row;
      cursor: pointer;
      width: auto;
      gap: 0.5rem;
      color: #731aff;
      transition: 0.2s;

      &:hover {
        color: white;

        @media (max-width: 767px) {
          color: #731aff;
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

export const Skills = styled.div`
  width: 750px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 30px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
  }

  .wrap-skills {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
`;

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 500px;
  background-color: #19013b;
  gap: 40px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    padding-bottom: 40px;
    padding-top: 40px;
  }

  h2 {
    color: white;
  }
`;

export const ServicesTitle = styled.div`
  align-items: center;

  @media (max-width: 767px) {
    align-items: center;
  }
`;

export const ServicesSpaces = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 100px;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
`;

export const Projects = styled.div`
  width: 100%;
  min-height: 500px;
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

  .wrap-cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 1252px;

    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #19013b;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    height: 700px;
    padding-left: 30px;
  }
  span {
    font-size: 20px;
  }
`;

export const FooterSpace = styled.div`
  width: 1000px;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
  }
`;

export const FooterTitle = styled.div`
  display: flex;
  width: 100%;
  gap: 35px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }

  .Title {
    @media (max-width: 767px) {
      font-size: 25px;
      width: 100%;
    }
  }
`;

export const FooterLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 40px;

  img {
    cursor: pointer;
  }

  .Links {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 20px;
    width: auto;

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      width: 300px;
      gap: 20px;
    }
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    width: 100%;
  }
`;

export const FooterInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    height: auto;
  }

  .icons {
    width: auto;
    display: flex;
    flex-direction: row;
    gap: 5px;

    i {
      color: white;
      font-size: 38px;
      cursor: pointer;
    }
  }
`;
