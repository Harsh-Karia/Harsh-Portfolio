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
            I am an aspiring software engineer and entrepreneur. I currently study CSE at UC Davis
              with a concentration in AI/ML and security. I am particularly fascinated with deep learning and its many applications but I am most intrigued by
              DL applications within cybersecurity and quantitative finance. Being an avid hackathon enthusiast, some of my proudest projects have been built in hackathons.
              I recently built out Project AVIA (winning 2nd place at Stanford TreeHacks in healthcare), an AI tool to help detect when pilots are at risk of blacking out and automatically giving plane control to the command center or a backup pilot.
              I have also built a study tool for students at CalHacks 10.0, a natural language based Gen-AI game to help elementary students learn vocabulary
              quickly at HackMIT and a non-invasive glucose checking device at HackDavis 2024. I have also done a few internships in automation engineering and
              fullstack development, using Python, Selenium, React, TypeScript, and JavaScript. Currently I am conducting research on the security and privacy vulnerabilities of GenAI browser extensions
              using MITMproxy and packet sniffing.<br></br>
            <br />
            <br>
            I am also part of a few clubs on campus such as CodeLab, where I am using next.js, PyTorch, and openAI models to create an AI-based interview preparation tool for college students. 
            At Aggie Sports Analytics, I am working on creating a comprehensive tool for the UC Davis Tennis teams to understand play patterns of players and their opponents. This is being done through ball tracking, court detection, player pose detection, and game analysis automation. 
            For this, I am mainly using PyTorch along with react, AWS, and the Detectron2 model.
            </br>
            
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
