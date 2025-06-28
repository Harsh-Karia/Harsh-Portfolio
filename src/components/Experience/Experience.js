import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
  const experiences = [
    {
      title: "AI and Security Engineering Intern",
      company: "Ethereum Foundation",
      period: "Jun 2025 - Sep 2025",
      description: "Currently focused on code security, blockchain infrastructure and augmenting manual code reviews. Creating custom AST(abstract syntax tree) + RAG system to represent syntactic structure of code and using LLM fuzzy matching with consensus layer specs to identify vulnerabilities in Python and Rust."
    },
    {
      title: "Generative AI Privacy Researcher",
      company: "Zubair Research Lab and ProperData Group",
      period: "Jan 2025 – Present",
      description: "Conducting research into memory of LLMs to identify potential lapses in data deletion, involuntary personalization, and commercial memory controls to create more comprehensive LLM memory benchmarks. Identifying potential sensitive data storage in Gen-AI browser extensions for personalization by web crawling, network packet sniffing, and MITMproxy analysis."
    },
    {
      title: "Software Engineering Intern",
      company: "Corgi AI (YC)",
      period: "Sep 2024 - Oct 2024",
      description: "Introduced automations for insurance data parsing and email marketing using OpenAI's LLM models and built internal APIs for financial data modeling, reducing resource requirements by 100x. Developed insurance policy pricing by building in-house risk management algorithms and created databases for property managers using PostgreSQL and Python."
    },
    {
      title: "Software Engineering Intern",
      company: "OurDate",
      period: "Dec 2023 – Jan 2024",
      description: "Partnered with senior leadership to assess AI usage, designing and implementing prompts that accelerated time to final results by 200% through query optimization. Engaged with beta testers and customers, gathering feedback to refine prompt customization, and led training initiatives for employees to enhance prompt generation efficiency by 10x."
    },
    {
      title: "Researcher",
      company: "Davis Applied Aerodynamics Lab",
      period: "Nov 2023 – May 2024",
      description: "Directed a team of 4 in software planning and scheduling for UC Davis' CITRIS Aviation Competition Team to design an optimized system for 32 air taxis. Engineered prototypes of a multifunctional application enabling seamless interaction between passengers and vehicle operators within the new air mobility system, enhancing scheduling efficiency. Presented at NASA - UC Technical Summit winning multiple awards and commendations from NASA and Lenovo for well-thought out proposal to integrate air taxis in UC campuses from a software and feasibility perspective."
    },
    {
      title: "Software Engineering Intern",
      company: "American Wild Horse Campaign",
      period: "June 2023 – Sept 2023",
      description: "Spearheaded end-to-end development of a mobile application (IOS and Android) using React Native and JavaScript, facilitating data collection for a nonprofit and successfully launching the app on the App Store. Designed and deployed frontend user interfaces using Figma and integrated object detection models with 95% accuracy to automate wild horse identification in images using Azure Cloud."
    },
    {
      title: "Software Engineering Intern",
      company: "SchedGo",
      period: "Nov 2022 – Mar 2023",
      description: "Revamped meeting type display on SchedGo's web application to allow students to optimize schedules based on class times using TypeScript and React.js. Enhanced app functionality for over 2500 monthly users across 4 universities by refining design and integration processes for schedule import/export and resolving outstanding bug issues."
    }
  ];

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Journey</strong>
        </h1>
        <p className="section-subtitle">
          My career path in technology, research, and innovation
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10}>
            <div className="timeline-container">
              {experiences.map((exp, index) => (
                <div key={index} className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                  <div className="timeline-content">
                    <div className="timeline-marker"></div>
                    <div className="timeline-card">
                      <h3 className="timeline-title">{exp.title}</h3>
                      <h4 className="timeline-company">{exp.company}</h4>
                      <p className="timeline-period">{exp.period}</p>
                      <div className="timeline-description">
                        <p>{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience; 