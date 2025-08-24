import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arpit Bhadani </span>
            from <span className="purple"> Bangalore, India.</span>
            <br /> Welcome to my portfolio! I am an enthusiastic Software
            Developer with hands-on experience in building web applications and
            cloud-based solutions. Through internships and projects, I have
            worked with technologies such as Java, Spring Boot, React.js,
            Node.js, and cloud computing. This portfolio showcases my projects,
            problem-solving skills, and my journey toward becoming a skilled
            Cloud and Full-Stack Developer.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Gadgets
            </li>
            <li className="about-activity">
              <ImPointRight /> Tech Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Arpit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
