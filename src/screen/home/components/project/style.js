import styled from "styled-components";

export const Main = styled.div`
  width: 410px;
  height: 200px;
  transition: 0.2s;

  @media (max-width: 767px) {
    width: 400px;
    height: 200px;
  }

  &:hover {
    z-index: 1;
    scale: 1.1;
  }

  .BgPurple {
    width: 410px;
    height: 200px;
    background: #06071b;
    border-left: 8px solid;
    border-image: linear-gradient(to bottom, #731aff, #1b1464);
    border-image-slice: 0 0 0 100%;
    position: relative;
    transition: 0.2s;

    @media (max-width: 767px) {
      width: 400px;
      height: 200px;
    }
  }

  .BgPurple:hover .Project {
    transition: 0.2s;
    display: block;
  }

  .Project {
    display: none;
    position: absolute;
    top: 90px;
    right: 145px;
    transition: 0.2s;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    opacity: 40%;
    transition: 0.2s;
    filter: blur(1px);
  }
`;
