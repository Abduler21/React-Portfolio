import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import data from "../components/Projects/projects";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <Container fluid className="portfolio-area" id="portfolio">
      <Row>
        <Col sm={12} lg={4} className="project-heading">
          <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Projects</h1>
        </Col>
        <Col lg={8} sm={12}>
          {data.map((project, i) => {
            return (
              <div className="isotope projects-container row js-layout-row">
                <div className="col-12 isotope-item">
                  <div className="media stream-item">
                    <div className="media-body">
                      <h3 className="article-title mb-0 mt-0">
                        <a
                          href={project.appUrl}
                          target="_blank"
                          style={{ textDecoration: "none" }}
                        >
                          {project.name}
                        </a>
                      </h3>
                      <div className="article-style">
                        <p>{project.text}</p>
                      </div>
                      <div className="btn-links">
                        <a
                          className="btn btn-outline-primary my-1 mr-1 btn-sm"
                          href={project.githubUrl}
                          target="_blank"
                        >
                          <i class="fab fa-github mr-1"></i>
                          Code
                        </a>
                      </div>
                    </div>
                    <div className="ml-3 mr-3">
                      <a href={project.appUrl} target="_blank"></a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
