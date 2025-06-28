import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              QUICK INTRO <span className="purple"> ABOUT </span> ME
            </h1>
            <p className="home-about-body">
              Hi there! I am Harsh, a rising senior studying computer science at UC Davis. I am a builder at heart and I love to take part in hackathons, create products for my school community, and try out the latest tech.
              <br />
              <br />Through my various internships, research, and personal projects, I have built up experience in  
              <em>
                <b className="purple"> fullstack development, cybersecurity, AI/ML research, and quantiative finance.  </b>
              </em>
              <br />
              <br />
              Checkout my &nbsp;
              <em> 
                <b className="purple">
                  <a 
                    href="/project" 
                    style={{
                      color: "#c770f0",
                      backgroundColor: "rgba(199, 112, 240, 0.1)",
                      padding: "8px 8px",
                      borderRadius: "5px",
                      margin: "0 5px",
                      textDecoration: "none",
                      border: "1px solid #c770f0",
                      transition: "all 0.3s ease"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#c770f0";
                      e.target.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "rgba(199, 112, 240, 0.1)";
                      e.target.style.color = "#c770f0";
                    }}
                  >projects</a> and 
                  <a 
                    href="/experience" 
                    style={{
                      color: "#c770f0",
                      backgroundColor: "rgba(199, 112, 240, 0.1)",
                      padding: "8px 8px",
                      borderRadius: "5px",
                      margin: "0 5px",
                      textDecoration: "none",
                      border: "1px solid #c770f0",
                      transition: "all 0.3s ease"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#c770f0";
                      e.target.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "rgba(199, 112, 240, 0.1)";
                      e.target.style.color = "#c770f0";
                    }}
                  >experiences</a> or get to know more about me 
                  <a 
                    href="/about" 
                    style={{
                      color: "#c770f0",
                      backgroundColor: "rgba(199, 112, 240, 0.1)",
                      padding: "8px 8px",
                      borderRadius: "5px",
                      margin: "0 5px",
                      textDecoration: "none",
                      border: "1px solid #c770f0",
                      transition: "all 0.3s ease"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#c770f0";
                      e.target.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "rgba(199, 112, 240, 0.1)";
                      e.target.style.color = "#c770f0";
                    }}
                  >here</a>.
                </b>
              </em>
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Harsh-Karia"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/harshkaria108/"
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
