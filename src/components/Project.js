import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Sample project data (replace with your actual project data)
const projects = [
  {
    title: "Project 1",
    description: "Description for Project 1 goes here.",
    githubLink: "https://github.com/yourusername/project1",
    liveDemoLink: "https://yourproject1demo.com/",
  },
  {
    title: "Project 2",
    description: "Description for Project 2 goes here.",
    githubLink: "https://github.com/yourusername/project2",
    liveDemoLink: "https://yourproject2demo.com/",
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2>My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              <Card className="project-card">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    variant="primary"
                    href={project.githubLink}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="secondary"
                    href={project.liveDemoLink}
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
