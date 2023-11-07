import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";

function HeroSection() {
  return (
    <Jumbotron className="hero-section">
      <Container>
        <h1>Welcome to My Portfolio</h1>
        <p>Showcasing my skills and projects</p>
        <p>
          <Button variant="primary" href="#projects">
            View Projects
          </Button>
        </p>
      </Container>
    </Jumbotron>
  );
}

export default HeroSection;
