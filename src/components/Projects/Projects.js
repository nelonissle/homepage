import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meine aktuellen <strong className="purple">Projektarbeiten </strong>
        </h1>
        <p style={{ color: "white" }}>
          An diesen Projekten habe ich in meiner Freizeit gearbeitet.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Meine Home Page"
              description="Meine eigene Home Page mit react.js erstellt."
              ghLink="https://github.com/nelonissle/homepage"
              demoLink="https://nelo.nissle.ch/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="OpenAI chat"
              description="Einen eigenen Chatbot mit OpenAI API erstellt. Der Chatbot kann auf alle Fragen antworten und auch eine Unterhaltung führen. Da ich ein Testzertifikat nutze, bitte weitergehen auf der Seite."
              ghLink="https://github.com/nelonissle/gptapp"
              demoLink="https://private.nissle.ch:8443/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
