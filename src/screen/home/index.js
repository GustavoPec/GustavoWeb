import { Navbar } from "./components/navbar";
import * as Styles from "./style";
import person from "../../assets/gustavoPerson.png";
import wave from "../../assets/wave.svg";
import waveInvert from "../../assets/waveInvert.svg";
import Logo from "../../assets/Logo.png";
import { ServiceBoard } from "./components/serviceBoard";
import { Link } from "react-scroll";
import { Project } from "./components/project";
import Faq from "../../assets/Faq.png";
import Blue from "../../assets/Blue.png";
import { Skills } from "./components/skills";
import HTML from "../../assets/HTML.svg";
import CSS from "../../assets/CSS.svg";
import STYLED from "../../assets/Styled.svg";
import REACT from "../../assets/React.svg";
import NEXT from "../../assets/NextJs.svg";
import CHAKRA from "../../assets/Chakra.svg";
import MUI from "../../assets/MUI.svg";
import { ButtonProfile } from "./components/buttonProfile";

const Home = () => {
  return (
    <Styles.Main>
      <Styles.Profile id="home">
        <Styles.Menu>
          <Navbar />
        </Styles.Menu>
        <Styles.ProfileSpace>
          <img
            className="Person"
            src={person}
            alt="Person"
            width="400px"
            data-aos="fade-right"
            data-aos-duration="500"
          />
          <Styles.ProfileInfos>
            <div data-aos="fade-left" data-aos-duration="500">
              <Styles.Text className="Title" padding-left="1rem" color="white">
                <h2>Olá, sou o Gustavo!</h2>
              </Styles.Text>
              <Styles.Text
                className="Desc"
                padding-left="1rem"
                color="white"
                fontSize="21px"
                text-align="left"
              >
                Sou um programador <strong>front-end web</strong>, responsável
                por criar e redesenhar sites, landing pages e páginas
                institucionais.
              </Styles.Text>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="400"
            >
              <Styles.ProfileIcons>
                <ul>
                  <li
                    onClick={() => {
                      window.open(
                        "https://wa.me/48999565527?text=Ol%C3%A1,Preciso%20de%20um%20or%C3%A7amento"
                      );
                    }}
                  >
                    <i className="ph-light ph-whatsapp-logo"></i>
                    Faça um orçamento
                  </li>
                  <li>
                    <i className="ph-light ph-instagram-logo"></i>
                    Me siga no Instagram
                  </li>
                  {/* <li>
                    <i className="ph-light ph-linkedin-logo"></i>
                    Olhe minhas publicações
                  </li> */}
                  <li>
                    <i className="ph-light ph-behance-logo"></i>
                    Acompanhe meus projetos
                  </li>
                </ul>
              </Styles.ProfileIcons>
            </div>
          </Styles.ProfileInfos>
        </Styles.ProfileSpace>
      </Styles.Profile>
      <Styles.Skills id="skills">
        <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="300">
          <h2>Habilidades</h2>
        </div>
        <div
          className="wrap-skills"
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="600"
        >
          <Skills Skills="Html 5" img={HTML} />
          <Skills Skills="Css 3" img={CSS} />
          <Skills Skills="React" img={REACT} />
          <Skills Skills="NextJs" img={NEXT} />
          <Skills Skills="Chakra" img={CHAKRA} />
          <Skills Skills="Mui" img={MUI} />
          <Skills Skills="Css-in-Js" img={STYLED} />
        </div>
      </Styles.Skills>
      <img className="Wave" src={wave} alt="wave" id="services" />
      <Styles.Services>
        <Styles.ServicesTitle>
          <h2>Serviços</h2>
        </Styles.ServicesTitle>
        <Styles.ServicesSpaces>
          <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200">
            <ServiceBoard
              title="Landing"
              subtitle="{Pages}"
              description1="Usada para "
              description2="capturação de leads. "
              description3="Seja em apresentações corporativas ou demonstrações de produto/serviço."
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="300">
            <ServiceBoard
              title="Página"
              subtitle="{Institucional}"
              description1="Formato muito procurado para "
              description2="apresentação
            de portfólio ou
            modelo de negócios."
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="400">
            <ServiceBoard
              title="Redesign"
              subtitle="{de site}"
              description1="Perfeito para quem precisa de uma  "
              description2=" “cara nova” "
              description3="para o seu site.
            Junta-se o design inicial com novas ideias."
            />
          </div>
        </Styles.ServicesSpaces>
      </Styles.Services>
      <img className="Wave" src={waveInvert} alt="wave" id="projects" />
      <Styles.Projects>
        <Styles.ProjectsSpace>
          <div
            className="description"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <h2>Projetos</h2>
            <Styles.Text color="#111b21" text-align="left" fontSize="20px">
              <span>
                Programados em <strong>React. </strong>
                Clique em <strong>"ver mais"</strong> ou em cima do projeto e
                você será direcionado para a página do projeto e poderá ver
                todos os
                <strong> detalhes </strong>
                de cada projeto.
              </span>
            </Styles.Text>
          </div>
        </Styles.ProjectsSpace>
        <Styles.ProjectCards>
          <div
            className="wrap-cards"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="400"
          >
            <Project
              img={Faq}
              name="Softilux FAQ"
              onClick={() => {
                window.open("https://faq.psfx.com.br/");
              }}
            />
            <Project
              img={Blue}
              name="Blue Consulting"
              onClick={() => {
                window.open("https://blue-consulting-sigma.vercel.app/");
              }}
            />
          </div>
        </Styles.ProjectCards>
      </Styles.Projects>
      <Styles.Footer id="infos">
        <Styles.FooterSpace>
          <div data-aos="fade-up" data-aos-duration="500">
            <Styles.FooterTitle>
              <div>
                <Styles.Text
                  className="Title"
                  fontWeight="bold"
                  color="#731aff"
                >
                  <h1>Precisa de um orçamento?</h1>
                </Styles.Text>
                <Styles.Text fontSize="20px" color="white">
                  Entre em contato comigo!
                </Styles.Text>
              </div>

              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={50}
              >
                <ButtonProfile title="Entrar em contato" />
              </Link>
            </Styles.FooterTitle>
          </div>

          <Styles.FooterLinks>
            <img
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="200"
              src={Logo}
              alt="logo"
              width="190px"
            />
            <div className="Links">
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                <Styles.FooterInfos>
                  <Styles.Text fontWeight="bold" color="#731aff">
                    <span>Infos</span>
                  </Styles.Text>
                  <div>
                    <Styles.Text color="white">Florianópolis</Styles.Text>
                    <Styles.Text color="white">+55 48 99956-5527</Styles.Text>
                  </div>
                </Styles.FooterInfos>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-delay="400"
              >
                <Styles.FooterInfos>
                  <Styles.Text fontWeight="bold" color="#731aff">
                    <span>Redes Sociais</span>
                  </Styles.Text>
                  <div className="icons">
                    <i
                      className="ph-light ph-whatsapp-logo"
                      onClick={() => {
                        window.open(
                          "https://wa.me/48999565527?text=Ol%C3%A1,%Preciso%20de%20um%20or%C3%A7amento"
                        );
                      }}
                    ></i>
                    <i className="ph-light ph-instagram-logo"></i>
                    {/* <i className="ph-light ph-linkedin-logo"></i> */}
                    <i className="ph-light ph-behance-logo"></i>
                  </div>
                </Styles.FooterInfos>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-delay="500"
              >
                <Styles.FooterInfos>
                  <Styles.Text fontWeight="bold" color="#731aff">
                    <span>Solicete por email</span>
                  </Styles.Text>
                  <Styles.Text color="white">
                    gustavoopecanha@gmail.com
                  </Styles.Text>
                </Styles.FooterInfos>
              </div>
            </div>
          </Styles.FooterLinks>
        </Styles.FooterSpace>
      </Styles.Footer>
    </Styles.Main>
  );
};

export default Home;
