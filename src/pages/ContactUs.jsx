import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-dark text-light py-5">
        <Container>
          <h1 className="fw-bold">Contact Us</h1>
          <p className="fs-5 mt-2">
            Have questions? We'd love to hear from you.
          </p>
        </Container>
      </section>

      {/* Contact Section */}
      <Container className="py-5">
        <Row className="g-4">
          {/* Contact Info */}
          <Col md={5}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h4 className="fw-bold mb-3">Get in Touch</h4>

                <p className="text-muted">
                  📧 Email: support@jobportal.com
                </p>
                <p className="text-muted">
                  📞 Phone: +91 98765 43210
                </p>
                <p className="text-muted">
                  🌍 Location: India
                </p>

                <p className="text-muted mt-3">
                  You can reach out to us for job postings,
                  interview preparation guidance, or feedback.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col md={7}>
            <Card className="shadow-sm">
              <Card.Body>
                <h4 className="fw-bold mb-3">Send a Message</h4>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write your message..."
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
