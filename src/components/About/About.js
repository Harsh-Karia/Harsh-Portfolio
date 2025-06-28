import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import treehacksImg from "../../Assets/Tree_hacks_group_pic.jpg";
import asaImg from "../../Assets/ASA_presentation.JPG";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Hero Section */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12}>
            <h1 className="project-heading" style={{ marginBottom: "20px" }}>
              I am a <strong className="purple">builder</strong>
            </h1>
            <p className="section-subtitle" style={{ fontSize: "1.2em", marginBottom: "50px" }}>
              I love the thrill of tackling a problem that I know can have a massive impact. I thrive in fast-paced settings which is why 
              I love to take part in hackathons and participate in clubs around campus.
            </p>
          </Col>
        </Row>

        {/* Two Column Image Section */}
        <Row style={{ justifyContent: "center", marginBottom: "80px" }}>
          <Col md={6} className="about-image-col">
            <div className="about-image-container">
              <img 
                src={treehacksImg} 
                alt="TreeHacks Team" 
                className="about-image"
              />
              <div className="image-caption">
                <p>Ideating with my team at Stanford's TreeHacks</p>
              </div>
            </div>
          </Col>
          <Col md={6} className="about-image-col">
            <div className="about-image-container">
              <img 
                src={asaImg} 
                alt="ASA Presentation" 
                className="about-image"
              />
              <div className="image-caption">
                <p>Presenting CourtCheck to panel of principal engineers and industry leaders</p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Research and Interests Section */}
        <Row style={{ justifyContent: "center", marginBottom: "80px" }}>
          <Col md={12}>
            <h2 className="section-title" style={{ fontSize: "2em", marginBottom: "30px" }}>
              Research and <strong className="purple">Interests</strong>
            </h2>
            <div className="research-content">
              <p style={{ fontSize: "1.1em", lineHeight: "1.8", color: "rgba(255, 255, 255, 0.9)", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                At UC Davis, I am working towards pushing the boundaries of frontier research on LLM safety, security, and privacy by studying memory in 
                long-context models.
              </p>
              <br />
              <p style={{ fontSize: "1.1em", lineHeight: "1.8", color: "rgba(255, 255, 255, 0.9)", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                I also have a particular interest in deep learning models, applications of ML in quantitative finance, and securing the web 
                by fortifying cybersecurity measures.
              </p>
            </div>
          </Col>
        </Row>

        {/* Skills Section */}
        <Row style={{ justifyContent: "center", marginTop: "80px" }}>
          <Col md={12}>
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset</strong>
            </h1>
            <p className="section-subtitle">
              Technologies and programming languages I work with
            </p>
            <Techstack />
          </Col>
        </Row>

        {/* Tools Section */}
        <Row style={{ justifyContent: "center", marginTop: "60px" }}>
          <Col md={12}>
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I Use
            </h1>
            <p className="section-subtitle">
              Development tools and platforms that power my workflow
            </p>
            <Toolstack />
          </Col>
        </Row>

        {/* GitHub Activity Section */}
        <Row style={{ justifyContent: "center", marginTop: "60px" }}>
          <Col md={12}>
            <h1 className="project-heading">
              Days I <strong className="purple">Code</strong>
            </h1>
            <Github />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
