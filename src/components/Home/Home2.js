import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Here's more <span className="purple"> ABOUT </span> ME
            </h1>
            <p className="home-about-body">
              Hi there! I am Harsh Karia, a third year computer science student at UC Davis. I love to build personal projects. You can head over to my projects section to see some of my projects in action.
              <br />
              <br />So far, I have built up proficiency in 
              <i>
                <b className="purple"> Python, React, C++, and JavaScript. I specifically have had a ton of experience with PyTorch, Tensorflow for computer vision and Wireshark and socket programming for network security.  </b>
              </i>
              <br />
              <br />
              The fields that I am most interested in are&nbsp;
              <i>
                <b className="purple">Machine Learning, Cybersecurity/network security, and Quantitative Finance
                </b>
              </i>
              <br />
              <br />
              Recently, I have been diving deep into deep learning ;) <b className="purple">and its applications in computer vision</b> as well as
              <i>
                <b className="purple">
                  {" "}
                  deep neural networks for LLM security and offensive attacks. Through these, I was able to explore technologies
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> PyTorch, Kali Linux, Tensorflow, Metasploit, and AWS.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
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
