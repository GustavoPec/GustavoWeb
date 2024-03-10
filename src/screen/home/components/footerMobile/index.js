import * as Styles from "./style.js";
import LogoBranca from "../../../../assets/LogoBranca.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const MobileFooter = () => {
  return (
    <Styles.Main>
      <div className="Footer-title">
        <h1>Entre em contato!</h1>
        <motion.div
          initial={{ x: -10 }}
          whileInView={{ x: 30 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 2,
          }}
        >
         
        </motion.div>
      </div>
      <div className="Footer-contact">
        <div className="Footer-list">
          <span>Redes sociais</span>
          <ul>
            <li
              onClick={() => {
                window.open(
                  "https://wa.me/48999565527?text=Ol%C3%A1, Preciso%20de%20um%20or%C3%A7amento"
                );
              }}
            >
              <a>Whatsapp</a>
            </li>
            <li>
              <a>Instagram</a>
            </li>
          </ul>
        </div>
        <div className="Footer-list">
          <span>Navegue pelo site</span>
          <ul>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                Começo
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                Serviços
              </Link>
            </li>
            {/* <li>
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                  >
                    Projetos
                  </Link>
                </li> */}
          </ul>
        </div>
      </div>
      <img src={LogoBranca} alt="logo" />
    </Styles.Main>
  );
};
