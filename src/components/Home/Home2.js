import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Lassen <span className="purple"> Sie mich  </span>  vortsellen
            </h1>
            <p className="home-about-body">
              Ich bin 17 jahre alt, komme aus Basel und liebe das Programmieren 🤷‍♂️
              <br />
              <br /> Meine lieblings Programmiersprachen sind: 
              <i>
                <b className="purple"> C#, Java und Javascript </b>
              </i>
              <br />
              <br />
              In Zukunft will ich Wirtschaftsinfromatik studieren,&nbsp;
              <i>
                <b className="purple"> SAP ABAP lernen </b> und vieles mehr 
                wie {" "}
                <b className="purple">
                  Crypto Währungen, IoT, ...
                </b>
              </i>
              <br />
              <br />
              Wenn immer möglich mache ich meine Arbeiten in einem 
              <b className="purple"> Projekt</b> mit 
              <i>
                <b className="purple">
                  {" "}
                  anderen Mitarbeitenden.
                </b>
              </i>
              <br />
              <br />
              <i>
                <b className="purple"> Ich möchte gerne neue Branchen kennenlernen</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Sie finden mich unter</h1>
            <p>
              Kontaktiren sie mich gerne! <span className="purple"> Schreiben </span> Sie mir unter
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nelonissle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nelo-nissl%C3%A9-208a87320/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
