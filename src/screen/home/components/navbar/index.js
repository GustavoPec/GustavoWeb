import * as Styles from "./style.js";
import Logo from "../../../../assets/Logo.png";
import { ButtonProfile } from "../buttonProfile/index.js";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <Styles.Main>
      <img src={Logo} alt="logo" />
      <Styles.List>
        <ul>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={50}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={50}
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={50}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link to="infos" spy={true} smooth={true} offset={50} duration={50}>
              Infos
            </Link>
          </li>
        </ul>
      </Styles.List>
      <ButtonProfile title="Faça um orçamento" />
    </Styles.Main>
  );
};
