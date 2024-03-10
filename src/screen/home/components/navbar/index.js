import * as Styles from "./style.js";
import Logo from "../../../../assets/Logo.png";
import { ButtonProfile } from "../buttonProfile/index.js";
import { Link } from "react-scroll";
import { motion, useScroll, useSpring } from "framer-motion";

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Styles.Main>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div
        data-aos="fade-down"
        data-aos-duration="700"
        data-aos-delay="600"
        data-aos-easing="ease"
      >
        <img src={Logo} alt="logo" />
      </div>

      <Styles.List>
        <ul>
          <div
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="700"
            data-aos-easing="ease"
            className="Links"
          >
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
            <li>
              <Link
                onClick={() => {
                  window.open(
                    "https://wa.me/48999565527?text=Ol%C3%A1, Preciso%20de%20um%20or%C3%A7amento"
                  );
                }}
              >
                Faça um orçamento
              </Link>
            </li>
          </div>
          {/* <div
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="300"
            data-aos-easing="ease"
          >
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                Projetos
              </Link>
            </li>
          </div> */}
        </ul>
      </Styles.List>
      {/* <div
        data-aos="fade-down"
        data-aos-duration="700"
        data-aos-delay="800"
        data-aos-easing="ease"
      >
        <ButtonProfile title="Faça um orçamento" />
      </div> */}
    </Styles.Main>
  );
};
