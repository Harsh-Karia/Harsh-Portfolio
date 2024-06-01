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
              DL applications within cybersecurity and quantitative finance. I have only recently transitioned from mechanical engineering to
              computer science so I am still exploring projects. Being an avid hackathon enthusiast, many of my projects have been built in hackathons.
              For example, I built a community management application for HackDavis in 2023, a study tool for students at CalHacks 10.0, a loan
              eligibility checker at SacHacks, and a non-invasive glucose checking device at HackDavis 2024. I have also done a few internships in
              fullstack development, using React, TypeScript, and JavaScript.
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
