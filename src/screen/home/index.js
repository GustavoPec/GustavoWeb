import React, { useRef, useEffect, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

import { Navbar } from "./components/navbar";
import * as Styles from "./style";
import SERVICERS from "../../assets/REDESIGN.png";
import SERVICESI from "../../assets/SITE INTERATIVO.png";
import SERVICEPI from "../../assets/PAGINA INST.png";
import SERVICELP from "../../assets/LANDING PAGE.png";
import UPDARKPURPLE from "../../assets/ROXO ESCURO CIMA.png";
import UPDARK from "../../assets/PRETO CIMA.png";
import UPLIGHTGRAY from "../../assets/CINZA CLARO CIMA.png";
import UPLIGHTPURPLE from "../../assets/ROXO CLARO CIMA.png";
import DOWNDARK from "../../assets/PRETO BAIXO.png";
import DOWNLIGHTPURPLE from "../../assets/ROXO CLARO BAIXO.png";
import DOWNLIGHTGRAY from "../../assets/CINZA CLARO BAIXO.png";
import DOWNDARKPURPLE from "../../assets/ROXO ESCURO BAIXO.png";
import LogoBranca from "../../assets/LogoBranca.png";
import Typed from "react-typed";
import { Link } from "react-scroll";
import { MobileFooter } from "./components/footerMobile";

const Home = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [window.innerHeight * -0.2, window.innerHeight * 1.7]
  );
  const y2 = useTransform(
    scrollYProgress,
    [1, 0],
    [window.innerHeight * 1.8, window.innerHeight * -0.15]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 1.2]
  );
  const y4 = useTransform(
    scrollYProgress,
    [1, 0],
    [window.innerHeight * 1.4, 0]
  );

  const clonedDivs = [];

  for (let i = 0; i < 1030; i++) {
    clonedDivs.push(
      React.cloneElement(<div key={i} className="square-colors" />)
    );
  }

  return (
    <Styles.Main>
      <Styles.Menu id="home">
        <Navbar />
      </Styles.Menu>
      <Styles.Profile>
        <Styles.ProfileSquares>
          <div className="container">{clonedDivs}</div>
        </Styles.ProfileSquares>
        <Styles.ProfileSpace>
          <Styles.ProfileInfos>
            <div className="Profile-space">
              <h2>Olá, sou o Gustavo</h2>
              <Styles.Text className="Desc">
                <p>
                  Sou um desenvolvedor <strong>front-end web</strong>, responsável
                  por criar <br />e redesenhar{" "}
                  <span>
                    sites, landing pages, páginas <br />
                    institucionais e sites interativos.
                  </span>
                </p>

                <br />
                <br />
              </Styles.Text>
              <div className="typed">
                <Typed
                  style={{
                    fontSize: "21px",
                    color: "#f8f8ff",
                  }}
                  strings={[
                    "Crie sua marca!",
                    "Inove sua empresa!",
                    "Desenvolva projetos!",
                  ]}
                  typeSpeed={40}
                  backSpeed={60}
                  loop
                />
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
              data-aos-easing="ease"
            >
              <Styles.ProfileIcons>
                <ul>
                  <li
                    onClick={() => {
                      window.open(
                        "https://wa.me/48999565527?text=Ol%C3%A1, Preciso%20de%20um%20or%C3%A7amento"
                      );
                    }}
                  >
                    <i className="ph-light ph-whatsapp-logo"></i>
                    Realizar orçamento
                  </li>
                  <li
                    onClick={() => {
                      window.open("https://www.instagram.com/gustavo.front/");
                    }}
                  >
                    <i className="ph-light ph-instagram-logo"></i>
                    Siga-me
                  </li>
                </ul>
              </Styles.ProfileIcons>
            </div>
          </Styles.ProfileInfos>
        </Styles.ProfileSpace>
      </Styles.Profile>
      <Styles.Services id="services">
        <Styles.ServicesSpaces ref={container}>
          <motion.div className="motionServices" style={{ y: y }}>
            <div className="ColumnServices">
              <motion.div
                whileInView={{ opacity: 0.6 }}
                initial={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 3,
                }}
              >
                <img src={DOWNDARKPURPLE} />
              </motion.div>
              <img src={SERVICELP} />
              <motion.div
                whileInView={{ opacity: 0.6 }}
                initial={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 3,
                }}
              >
                <img src={UPLIGHTPURPLE} />
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="motionServices" style={{ y: y2 }}>
            <div className="ColumnServices">
              <motion.div
                whileInView={{ opacity: 0.6 }}
                initial={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 3,
                }}
              >
                <img src={DOWNDARK} />
              </motion.div>

              <img src={SERVICEPI} />
              <motion.div
                whileInView={{ opacity: 0.6 }}
                initial={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 3,
                }}
              >
                <img src={UPDARKPURPLE} />
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="motionServices" style={{ y: y3 }}>
            <div className="ColumnServices">
              <motion.div
                whileInView={{ opacity: 0.6 }}
                initial={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 3,
                }}
              >
                <img src={DOWNLIGHTPURPLE} />
              </motion.div>

              <img src={SERVICERS} />
              <motion.div
                whileInView={{ opacity: 0.6 }}
                initial={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 3,
                }}
              >
                <img src={UPDARK} />
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="motionServices" style={{ y: y4 }}>
            <div className="ColumnServices">
              <motion.div
                whileInView={{ opacity: 0.6 }}
                initial={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 3,
                }}
              >
                <img src={DOWNLIGHTGRAY} />
              </motion.div>

              <img src={SERVICESI} />
              <motion.div
                whileInView={{ opacity: 0.6 }}
                initial={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 3,
                }}
              >
                <img src={UPLIGHTGRAY} />
              </motion.div>
            </div>
          </motion.div>
        </Styles.ServicesSpaces>
      </Styles.Services>
      <Styles.ServicesMobile>
        <motion.div
          className="motion-div"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 3,
          }}
        >
          <img src={SERVICELP} />
        </motion.div>
        <motion.div
          className="motion-div"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 3,
          }}
        >
          <img src={SERVICEPI} />
        </motion.div>
        <motion.div
          className="motion-div"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 5,
          }}
        >
          <img src={SERVICERS} />
        </motion.div>
        <motion.div
          className="motion-div"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 3,
          }}
        >
          <img src={SERVICESI} />
        </motion.div>
      </Styles.ServicesMobile>

      {/* <Styles.Projects id="projects"></Styles.Projects> */}
      <Styles.Footer>
        <Styles.FooterLimit>
          <Styles.FooterSpace>
            <div className="Footer-column">
              <div className="Footer-column-contact-title">
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
                  <i className="ph-bold ph-arrow-elbow-down-right"></i>
                </motion.div>
              </div>
              <div className="Footer-column-contact-link">
                <span>Ou mande um email</span>
                <span>gustavoopecanha@gmail.com</span>
              </div>
            </div>
          </Styles.FooterSpace>
          <Styles.FooterSpace>
            <div className="Footer-column">
              <div className="Footer-column-contact-list">
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
            </div>
          </Styles.FooterSpace>
          <Styles.FooterSpace>
            <div className="Footer-column">
              <div className="Footer-column-contact-list">
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
              <img src={LogoBranca} alt="logo" />
            </div>
          </Styles.FooterSpace>
        </Styles.FooterLimit>
      </Styles.Footer>
      <MobileFooter />
    </Styles.Main>
  );
};

export default Home;
