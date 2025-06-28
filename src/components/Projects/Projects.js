import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import finguard from "../../Assets/Projects/FinGuard.jpg";
import quizzical from "../../Assets/Projects/QuizzicalPic.jpg";
import EnigmaCoin from "../../Assets/Projects/EnigmaCoin.png";
import neurotech from "../../Assets/Projects/Neurotech.webp";
import WordPlay from "../../Assets/Projects/WordPlay.png";
import courtchecklogo from "../../Assets/Projects/courtchecklogo.png";
import memonitorlogo from "../../Assets/Projects/MeMonitorLogo.png";
import AviaImg from "../../Assets/Projects/AviaImg.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Projects</strong>
        </h1>
        <p className="section-subtitle">
          Here are some of my latest creations that showcase my passion for innovation and problem-solving.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AviaImg}
              isBlog={false}
              title="Project AVIA"
              description="🏆 2nd Place at Stanford TreeHacks. An AI-driven command center that consolidates real-time biometric data—heart rate, HRV, SpO2, sleep quality, stress levels, and estimated blood pressure—to provide comprehensive insights into pilot health and performance for data-driven decision making."
              ghLink="https://github.com/Harsh-Karia/TreeHacks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={courtchecklogo}
              isBlog={false}
              title="CourtCheck"
              description="Advanced computer vision system for tennis match analysis. Leverages ML algorithms to accurately track tennis ball movements and court boundaries, providing real-time insights and automated decision-making to reduce human error in tennis officiating."
              ghLink="https://github.com/AggieSportsAnalytics/CourtCheck"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WordPlay}
              isBlog={false}
              title="WordPlay"
              description="🎮 AI-powered educational platformer game that transforms vocabulary learning into interactive experiences. Students use creativity and imagination to bring ideas to life in-game, creating endless possibilities for educational exploration and problem-solving."
              ghLink="https://github.com/WordPlayEducation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EnigmaCoin}
              isBlog={false}
              title="Enigma Coin"
              description="Custom blockchain-based cryptocurrency built from scratch with Python. Features RSA encryption implementation, mining capabilities, transaction processing, and coin trading system. Includes a comprehensive web platform showcasing blockchain functionality."
              ghLink="https://github.com/Mohnish2004/EnigmaCoin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neurotech}
              isBlog={false}
              title="CerebralSecure"
              description="Innovative BCI (Brain-Computer Interface) security system that uses jaw clenches, focus levels, and eye blinks for user authentication. Advanced pattern recognition algorithms analyze biometric inputs to accurately identify authorized users."
              ghLink="https://github.com/Neurotech-Davis/CerebralSecure"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finguard}
              isBlog={false}
              title="FinGuard"
              description="Comprehensive financial guidance platform for recent graduates and young professionals. Features an advanced Loan Eligibility Predictor using ML algorithms to assess loan approval chances based on income, education, and financial factors."
              ghLink="https://github.com/SacHacks5-0/App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memonitorlogo}
              isBlog={false}
              title="MeMonitor"
              description="Comprehensive network monitoring system using Python and dpkt library. Analyzes 500+ network packets for enhanced traffic visibility, featuring TCP proxy server and UDP client-server architecture for optimized data transfer and performance monitoring."
              ghLink="https://github.com/Harsh-Karia/ProjectsPublic"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizzical}
              isBlog={false}
              title="Quizzical"
              description="Intelligent study companion that transforms lecture materials into custom flashcards. Upload notes, slides, or recordings and our efficient algorithm extracts relevant information to generate personalized study materials with key concepts highlighted."
              ghLink="https://github.com/Harsh-Karia/file_to_flashcard"           
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
