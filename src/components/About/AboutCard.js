import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi. My name is <span className="purple">Harsh Karia and I am </span>
            from <span className="purple"> the Bay Area.</span>
            <br />
            I am an aspiring machine learning engineer and entrepreneur. I currently study CSE at UC Davis
              with a concentration in AI/ML. I am particularly fascinated with deep learning and its many applications but I am most intrigued by
              DL applications within cybersecurity and quantitative finance. Being an avid hackathon enthusiast, many of my projects have been built in hackathons.
              For example, I built a study tool for students at CalHacks 10.0, a natural language based Gen-AI game to help elementary students learn vocabulary
              quickly at HackMIT and a non-invasive glucose checking device at HackDavis 2024. I have also done a few internships in automation engineering and
              fullstack development, using Python, Selenium, React, TypeScript, and JavaScript. I am also part of a few clubs on campus such as CodeLab, where I
              using nextjs, PyTorch, and openAI models to create an AI interviewer. I am also a part of Aggie Sports Analytics where I am working on creating a 
              comprehensive tool for the UC Davis Tennsi teams to track the ball and accurately detect if a ball is in or out. For this, I am mainly using PyTorch 
              along with react, AWS, and the Detectron2 model.<br></br>
            <br />
            
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing sports (Tennis, Volleyball, Basketball)
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading (Science fiction, philosophy, and psychology)
            </li>
            <li className="about-activity">
              <ImPointRight /> Stock Market Trading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hacker. Tinkerer. Changemaker"{" "}
          </p>
          <footer className="blockquote-footer">Harsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
