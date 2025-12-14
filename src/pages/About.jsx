import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-primary text-light py-5">
        <Container>
          <h1 className="fw-bold">About Our Platform</h1>
          <p className="fs-5 mt-2">
            Helping job seekers prepare, apply, and succeed.
          </p>
        </Container>
      </section>

      {/* About Content */}
      <Container className="py-5">
        <Row className="g-4">
          <Col md={6}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h4 className="fw-bold mb-3">Who We Are</h4>
                <p className="text-muted">
                  We are a career-focused job portal designed to help
                  freshers and experienced professionals find jobs and
                  prepare confidently for interviews.
                </p>
                <p className="text-muted">
                  Our platform combines job listings with interview
                  preparation tools, making job search and preparation
                  available in one place.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h4 className="fw-bold mb-3">What We Offer</h4>
                <ul className="text-muted">
                  <li>Latest job postings from companies</li>
                  <li>Technical, HR & aptitude interview questions</li>
                  <li>Mock tests and practice sessions</li>
                  <li>Resume tips and career guidance</li>
                  <li>Progress tracking for interview preparation</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Mission */}
        <Row className="mt-5">
          <Col>
            <Card className="shadow-sm">
              <Card.Body className="text-center">
                <h4 className="fw-bold mb-3">Our Mission</h4>
                <p className="text-muted fs-5">
                  To simplify job searching and interview preparation
                  by providing the right resources at the right time.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
