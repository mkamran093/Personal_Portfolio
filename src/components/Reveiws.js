import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const reviews = [
  {
    author: "John Doe",
    content: "Great work! I was really impressed with your projects.",
  },
  {
    author: "Jane Smith",
    content: "Your skills and dedication shine through in your work.",
  },
  // Add more reviews as needed
];

function Reviews() {
  return (
    <section id="reviews" className="reviews-section">
      <Container>
        <h2>Client Reviews</h2>
        <Row>
          {reviews.map((review, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              <Card className="review-card">
                <Card.Body>
                  <Card.Text>{review.content}</Card.Text>
                  <Card.Title>{review.author}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Reviews;
