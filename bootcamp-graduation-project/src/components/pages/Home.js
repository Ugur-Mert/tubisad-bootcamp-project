import React, { useEffect } from "react";
import "./Home.css";

import BackToTopButton from "../BackToTopButton";

import Projects from "../Projects";

import Frontend from "../Images/Frontend.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Aos from "aos";
import "aos/dist/aos.css";

import { AiOutlineHtml5 } from "react-icons/ai";
import { GiCampingTent, GiCoffeeCup, GiJewelCrown } from "react-icons/gi";
import {
  DiCss3,
  DiJavascript1,
  DiJqueryLogo,
  DiReact,
  DiGithubBadge,
} from "react-icons/di";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <header className="align-items-center  ">
        <section className="section-welcome p-5">
          <Container>
            <Col>
              <Row className="text-center mt-3 text-white ">
                <h1 className="header-text ">Welcome !</h1>
              </Row>
              <Col className="text-center mt-3">
                <img className="home-img" src={Frontend} alt="fronted" />
              </Col>
            </Col>
          </Container>
        </section>
      </header>

      <main>
        <section id="abilities" className="section-abilities p-5  ">
          <Container>
            <Col>
              <Row className="text-center   ">
                <h1 className="header-text">Abilities</h1>
              </Row>
              <Col
                data-aos="fade-down"
                data-aos-offset="350"
                data-aos-easing="ease-in-sine"
                className="text-center  mx-auto col-12"
              >
                <DiReact />
              </Col>
              <Col className="text-center  mx-auto col-3">
                <Row>
                  <Col
                    data-aos="fade-right"
                    data-aos-offset="350"
                    data-aos-easing="ease-in-sine"
                  >
                    <DiJqueryLogo />
                  </Col>
                  <Col
                    data-aos="fade-left"
                    data-aos-offset="350"
                    data-aos-easing="ease-in-sine"
                  >
                    <DiGithubBadge />
                  </Col>
                </Row>
              </Col>
              <Col className="text-center mx-auto col-4">
                <Row>
                  <Col
                    data-aos="fade-right"
                    data-aos-offset="350"
                    data-aos-easing="ease-in-sine"
                  >
                    <AiOutlineHtml5 />
                  </Col>
                  <Col
                    data-aos="fade-up"
                    data-aos-offset="350"
                    data-aos-easing="ease-in-sine"
                  >
                    <DiCss3 />
                  </Col>
                  <Col
                    data-aos="fade-left"
                    data-aos-offset="350"
                    data-aos-easing="ease-in-sine"
                  >
                    <DiJavascript1 />
                  </Col>
                </Row>
              </Col>
            </Col>
          </Container>
        </section>

        <section id="projects" className="section-projects bg-dark pb-5">
          <Container>
            <Col>
              <Row className="text-center text-white ">
                <h1 className="mt-4 mb-5">PROJECTS</h1>
              </Row>
              <Row className="mx-auto text-center ">
                <Row className="mb-4 mx-auto">
                  <Projects />
                </Row>
              </Row>
            </Col>
          </Container>
        </section>

        <section className="section-facts">
          <Container>
            <Row className="text-center mb-4">
              <h1 className="mb-5 mt-3">Interesting Facts</h1>
              <Col>
                <p className="fs-1">
                  <GiJewelCrown />
                </p>
                <p className="fs-3">10</p>
                <p>PROJECT</p>
              </Col>
              <Col>
                <p className="fs-1">
                  <GiCoffeeCup />
                </p>
                <p className="fs-3">23</p>
                <p>Cup of Coffee</p>
              </Col>
              <Col>
                <p className="fs-1">
                  <GiCampingTent />
                </p>
                <p className="fs-3">48</p>
                <p>Hour Bootcamp</p>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <BackToTopButton />
    </div>
  );
};

export default Home;
