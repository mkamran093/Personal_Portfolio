import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2>Contact Me</h2>
        <p>Feel free to get in touch with me. I'd love to hear from you!</p>

        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Your Email" />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your Message" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
}

export default Contact;
