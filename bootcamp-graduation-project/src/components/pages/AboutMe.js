import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Engineering from "../Images/engineering.jpg";
import FrontendDev from "../Images/frontendDev.jpg";

export default function AboutMe() {
  return (
    <>
      <section className="mt-5">
        <Container>
          <h1 className="text-center pt-5">About Me</h1>
          <Row className="mb-5 ">
            <Col sm={12} md={6} lg={6} className=" mt-5">
              <img className="img-fluid" src={Engineering} alt="engineer" />
            </Col>
            <Col sm={12} md={6} lg={6} className="align-self-center  mt-5">
              <p>
                Merhaba! Ben Uğur Mert Özder. Mekatronik mühendisiyim. Yaklaşık
                4 aydır kendimi geliştirmekteyim. Liseden beri farklı dillerde
                kodlama dersleri ile iç içe oldum. Bu durum bana yazılım
                alanında bir altyapı hazırladı. Öğrenme sürecine girdiğimde ise
                çok fazla yabancılık çekmeden adapte olabildim. Yaptığım
                çalışmalar, bireysel öğrenme sürecim ve TechCareer sayesinde
                farklı yetenekler edinme konusunda kendimi geliştirerek, iş
                hayatına hazırladım.
                <br />
                İstekli ve özenli yapılan, her detayı detaylı bir şekilde
                irdelenerek yapılan çalışmaların mutlaka başarı getireceği
                inancında ve bilincindeyim.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-dark  text-white">
        <Container>
          <Row className="pb-5   ">
            <Col sm={12} md={6} lg={6} className="align-self-center mt-5">
              <h1>Neden yazılım sektörüne yöneldim ?</h1>
              <p>
                Yazılım alanında kendimi daha çok geliştirebileceğimi
                düşünüyorum. Bitirmiş olduğum bölümün bana katmış olduğu çok
                yönlü olmanın gerekleri doğrultusunda yazılımın benim için
                biçilmiş kaftan olduğu kararına vardım.
              </p>
            </Col>
            <Col sm={12} md={6} lg={6} className=" mt-5 ">
              <img
                className="img-fluid rounded"
                src={FrontendDev}
                alt="frontend"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
