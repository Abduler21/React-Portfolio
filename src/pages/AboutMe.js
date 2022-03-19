import React from "react";
import "../styles/AboutMe.css";
import Picture from "../images/img_1683.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";

function AboutMe() {
  return (
    <section className="home-area" id="about">
      <Container fluid>
        <Row>
          <Col sm={12} lg={4}>
            <div id="profile">
              <Image
                id="my-pic"
                className="avatar avatar-circle"
                src={Picture}
              />
              <div className="portrait-title">
                <h2>Abdulmelik Ersoy</h2>
                <h3>Full Stack Web Developer</h3>
                <h3>
                  <a
                    href="https://www.wpunj.edu/"
                    target="_blank"
                    rel="noopener"
                    style={{ textDecoration: "none" }}
                  >
                    <span>Rutgers University</span>
                  </a>
                </h3>
              </div>
              <ul
                className="network-icon d-flex auto-mx justify-content-center"
                aria-hidden="true"
                id="social-pages-btn"
              >
                <li className="list-inline-item icon">
                  <a
                    href="mailto:01abdulmelik@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i class="fas fa-envelope"></i>
                  </a>
                </li>
                <li className="list-inline-item icon">
                  <a
                    href="https://github.com/Abduler21"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li className="list-inline-item icon">
                  <a
                    href="https://www.linkedin.com/in/abdulmelik-ersoy-a28194220/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} lg={8}>
            <div id="biography">
              <h1 id="header-title">Biography</h1>
              <p>
                My name is Abdulmelik Ersoy and I am currently enrolled in
                Rutgers University Full Stack Web Development Bootcamp where i
                will be graduating April of 2022
              </p>
              <p>
                I am a young programmer, eager to always learn new concepts and
                ideas that will further my programming skills and take my
                projects to the next level. I love to make coding projects that
                are not only fun, but also challenging.
              </p>
            </div>
            <Row>
              <Col md={8}>
                <div id="education-section">
                  <h3>Education</h3>
                  <ul className="ul-edu fa-ul">
                    <li>
                      <i class="fas fa-graduation-cap"></i>
                      <div className="descriptions">
                        <p className="course">
                          Garfield High School, Class of 2017
                        </p>
                      </div>
                    </li>

                    <li>
                      <i class="fas fa-graduation-cap"></i>
                      <div className="descriptions">
                        <p className="course">
                          Full Stack Web Development Certificate{" "}
                        </p>
                        <p className="institution">Rutgers University</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <section id="skills-class" className="home-section">
        <Container className="container">
          <Row className="featurette">
            <Col md={12} className="section-heading">
              <h1>Skills</h1>
            </Col>
            <Col sm={4}>
              <div className="featurette-icon">
                <i class="fab fa-js-square"></i>
              </div>
              <h3>JavaScript</h3>
            </Col>
            <Col sm={4}>
              <div className="featurette-icon">
                <i class="fab fa-react"></i>
              </div>
              <h3>React</h3>
            </Col>
            <Col sm={4}>
              <div className="featurette-icon">
                <i class="fab fa-html5"></i>
              </div>
              <h3>HTML5</h3>
            </Col>
            <Col sm={4}>
              <div className="featurette-icon">
                <i class="fab fa-css3-alt"></i>
              </div>
              <h3>CSS3</h3>
            </Col>
            <Col sm={4}>
              <div className="featurette-icon">
                <i class="fab fa-node-js"></i>
              </div>
              <h3>Node.js</h3>
            </Col>
            <Col sm={4}>
              <div className="featurette-icon">
                <i class="fas fa-database"></i>
              </div>
              <h3>Databases</h3>
              <p>MySQL, MongoDB</p>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
}

export default AboutMe;
