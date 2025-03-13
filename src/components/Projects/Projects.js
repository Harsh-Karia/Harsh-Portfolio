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
          What I am working <strong className="purple">on </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my most recent projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AviaImg}
              isBlog={false}
              title="Project AVIA"
              description="Project AVIA is an AI-driven command center that consolidates real-time biometric data—heart rate, heart rate variability, oxygen saturation (SpO2), sleep quality, stress levels, exercise, and estimated blood pressure—sourced from Terra API and PPG recordings. Our command center has comprehensive insights into a pilot’s health and performance, enabling leadership to make informed, data-driven decisions."
              ghLink="https://github.com/Harsh-Karia/TreeHacks"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={courtchecklogo}
              isBlog={false}
              title="CourtCheck"
              description="CourtCheck leverages advanced computer vision techniques to accurately track tennis ball movements and court boundaries in tennis matches. This project aims to provide real-time insights and automated decision-making in tennis, reducing human error and enhancing the accuracy of in/out calls. CourtCheck integrates Python, machine learning, and computer vision to create a seamless and efficient system for tennis match analysis."
              ghLink="https://github.com/AggieSportsAnalytics/CourtCheck"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memonitorlogo}
              isBlog={false}
              title="MeMonitor"
              description=" Designed and implemented network monitoring system using Python and dpkt library to analyze 500+ network packets, enhancing visibility into network traffic. Developed TCP proxy server and UDP client-server architecture to facilitate message routing and measure throughput for 100 MB batches of data transfer, optimizing network performance and response time"
              ghLink="https://github.com/Harsh-Karia/ProjectsPublic"
              // demoLink="https://github.com/Mohnish2004/EnigmaCoin"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EnigmaCoin}
              isBlog={false}
              title="Enigma Coin"
              description="Enigma Coin is a blockchain-based cryptocurrency project developed from scratch using Python. The aim of this project was to explore the application of RSA encryption in blockchain technology. We created our own blockchain with RSA encryption and implemented various functionalities like mining, transactions, and coin buying. In addition, we developed a web platform to showcase the functioning of the Enigma Coin."
              ghLink="https://github.com/Mohnish2004/EnigmaCoin"
              // demoLink="https://github.com/Mohnish2004/EnigmaCoin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neurotech}
              isBlog={false}
              title="CerebralSecure"
              description="BCI Lock System employs a combination of jaw clenches, focus levels, and eye blinks by analyzing patterns derived from these inputs, the system can accurately identify an authorized user and grant or deny access accordingly."
              ghLink="https://github.com/Neurotech-Davis/CerebralSecure"
              // demoLink="https://github.com/Neurotech-Davis/CerebralSecure"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WordPlay}
              isBlog={false}
              title="WordPlay"
              description="WordPlay is an AI-powered platformer game that turns dull vocabulary lessons into interactive learning experiences, where students can use their imagination to bring their ideas to life in-game, creating endless possibilities for creative exploration and problem-solving as they engage with educational concepts in dynamic and playful ways."
              ghLink="https://github.com/WordPlayEducation"
              // demoLink="https://github.com/SacHacks5-0/App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizzical}
              isBlog={false}
              title="Quizzical"
              description="Quizzical is the perfect tool to use while studying. Simply upload your lecture notes, slides, or lecture recordings. Our efficient algorithm will scrape all of the relevant information from the uploaded files and generate custom flashcards for you to practice along with all the main points gathered from the file."
              ghLink="https://github.com/Harsh-Karia/file_to_flashcard"
              // demoLink="https://github.com/Harsh-Karia/file_to_flashcard"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finguard}
              isBlog={false}
              title="FinGuard"
              description="FinGuard is a comprehensive platform tailored to guide recent college graduates and young professionals on their financial journey. Upon entering the platform, users can easily create an account, granting them access to our powerful financial tools. The centerpiece of FinGuard is our Loan Eligibility Predictor, which empowers users to gauge their eligibility for loans by inputting various factors like income, marital status, education, and loan terms."
              ghLink="https://github.com/SacHacks5-0/App"
              // demoLink="https://github.com/SacHacks5-0/App"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
