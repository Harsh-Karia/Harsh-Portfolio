import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Container>
      {/* Personal Introduction Section */}
      <div className="about-intro-section">
        <h2 className="section-title">About Me</h2>
        <p style={{ textAlign: "center", fontSize: "1.3em", lineHeight: "1.8", color: "rgba(255, 255, 255, 0.9)" }}>
          Hi! I'm <span className="purple">Harsh Karia</span>, an aspiring software engineer and entrepreneur from
          <span className="purple"> the Bay Area</span>. Currently pursuing CSE at UC Davis with a concentration in AI/ML and security.
        </p>
        <div style={{ textAlign: "center", marginTop: "25px" }}>
          <p style={{ color: "rgb(155 126 172)", fontStyle: "italic", fontSize: "1.2em", fontWeight: "500" }}>
            "Hacker. Tinkerer. Changemaker"
          </p>
        </div>
      </div>

      {/* Experience and Projects Grid */}
      <div className="about-experience-grid">
        <div className="about-experience-card">
          <h3>🚀 Current Focus</h3>
          <p style={{ textAlign: "justify", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.9)", fontSize: "1.05em" }}>
            I'm particularly fascinated by <strong className="purple">deep learning and its applications</strong> — especially in cybersecurity and quantitative finance. 
          </p>
          <p style={{ textAlign: "justify", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.85)", fontSize: "1.05em", marginTop: "10px" }}>
            Currently researching GenAI browser extension vulnerabilities with MITMproxy and LLM memory management security.
          </p>
        </div>

        <div className="about-experience-card">
          <h3>🏆 Hackathon Achievements</h3>
          <div style={{ color: "rgba(255, 255, 255, 0.9)", lineHeight: "1.6" }}>
            <div style={{ marginBottom: "8px", padding: "4px 0" }}>
              <strong className="purple">Project AVIA</strong> – 2nd place at Stanford TreeHacks
              <div style={{ fontSize: "0.95em", color: "rgba(255, 255, 255, 0.75)", marginTop: "2px" }}>
                Pilot blackout detection with auto-transfer control
              </div>
            </div>
            <div style={{ marginBottom: "8px", padding: "4px 0" }}>
              <strong className="purple">Vocabulary Learning Game</strong> – HackMIT
              <div style={{ fontSize: "0.95em", color: "rgba(255, 255, 255, 0.75)", marginTop: "2px" }}>
                GenAI-powered educational platform
              </div>
            </div>
            <div style={{ padding: "4px 0" }}>
              <strong className="purple">Glucose Monitor</strong> – HackDavis 2024
              <div style={{ fontSize: "0.95em", color: "rgba(255, 255, 255, 0.75)", marginTop: "2px" }}>
                Non-invasive monitoring solution
              </div>
            </div>
          </div>
        </div>

        <div className="about-experience-card">
          <h3>💼 Professional Experience</h3>
          <p style={{ textAlign: "justify", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.9)", fontSize: "1.05em" }}>
            Experienced in <strong className="purple">automation engineering and full-stack development</strong> with Python, Selenium, React, TypeScript, and JavaScript.
          </p>
          <p style={{ textAlign: "justify", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.85)", fontSize: "1.05em", marginTop: "10px" }}>
            Background spans web development, mobile apps, and cybersecurity research across multiple internships.
          </p>
        </div>

        <div className="about-experience-card">
          <h3>🎯 Current Involvement</h3>
          <div style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.9)", fontSize: "1.05em" }}>
            <div style={{ marginBottom: "10px" }}>
              <strong className="purple">CodeLab</strong>
              <div style={{ fontSize: "0.95em", color: "rgba(255, 255, 255, 0.8)", marginTop: "2px" }}>
                Building AI interview prep tool with Next.js and PyTorch
              </div>
            </div>
            <div>
              <strong className="purple">Aggie Sports Analytics</strong>
              <div style={{ fontSize: "0.95em", color: "rgba(255, 255, 255, 0.8)", marginTop: "2px" }}>
                Computer vision tennis analysis with Detectron2, AWS, and React
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hobbies and Interests Section */}
      <div className="about-hobbies-section">
        <h3 style={{ color: "var(--imp-text-color)", textAlign: "center", marginBottom: "25px", fontSize: "1.6em" }}>
          Beyond Coding
        </h3>
        <p style={{ textAlign: "center", color: "rgba(255, 255, 255, 0.8)", marginBottom: "30px" }}>
          When I'm not building the next big thing, you can find me:
        </p>
        
        <div className="about-hobbies-grid">
          <div className="hobby-item">
            <ImPointRight />
            <span>Playing sports (Tennis, Volleyball, Basketball)</span>
          </div>
          <div className="hobby-item">
            <ImPointRight />
            <span>Reading (Science fiction, philosophy, and psychology)</span>
          </div>
          <div className="hobby-item">
            <ImPointRight />
            <span>Stock Market Trading</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutCard;
