import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hallo, ich bin <span className="purple">Nelo Nisslé </span>
            aus <span className="purple"> Basel, Schweiz.</span>
            <br />
            Zur Zeit absolviere ich den schulischen Teil als Applikationsentwickler.
            <br />
            Ich bin eifrig dabei, verschiedene Themen zu erlernen, wie z. B. die Arbeit mit C#, Backends, Frontends oder Datenbanken.
            <br />
            <br />
            In meiner Freizeit mache ich
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> mit meinen Freunden zusammensein
            </li>
            <li className="about-activity">
              <ImPointRight /> meine eigenen IT projekte
            </li>
            <li className="about-activity">
              <ImPointRight /> bleibe gerne über Neues auf dem laufenden 
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
