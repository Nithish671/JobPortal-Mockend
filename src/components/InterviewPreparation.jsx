import React from 'react'
import { Card, Col, Container, Row, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const InterviewPreparation = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="fw-bold mb-3">Interview Preparation</h1>
              <p className="fs-5">
                Prepare smarter for your next interview with structured learning,
                real interview questions, mock tests, and expert tips.
              </p>

              <Button
                as={Link}
                to="/interview-questions"
                variant="light"
                size="lg"
                className="me-3"
              >
                Start Preparing
              </Button>

              <Button
                as={Link}
                to="/mock-tests"
                variant="outline-light"
                size="lg"
              >
                Mock Interviews
              </Button>
            </Col>

            <Col md={5} className="text-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/169/246/original/job-search-vector-design.jpg"
                alt="interview"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Categories */}
      <Container className="py-5">
        <h2 className="fw-bold text-center mb-4">
          Preparation Categories
        </h2>

        <Row className="g-4">
          <Col md={3}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h5 className="fw-bold">Technical</h5>
                <p className="text-muted small">
                  Core programming, frameworks, databases & system design.
                </p>
                <Button
                  as={Link}
                  to="/interview-questions/technical"
                  variant="primary"
                  size="sm"
                >
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h5 className="fw-bold">HR Interview</h5>
                <p className="text-muted small">
                  Behavioral questions, communication & confidence tips.
                </p>
                <Button
                  as={Link}
                  to="/interview-questions/hr"
                  variant="primary"
                  size="sm"
                >
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h5 className="fw-bold">Aptitude</h5>
                <p className="text-muted small">
                  Quantitative aptitude, logical reasoning & puzzles.
                </p>
                <Button
                  as={Link}
                  to="/interview-questions/aptitude"
                  variant="primary"
                  size="sm"
                >
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h5 className="fw-bold">Resume Tips</h5>
                <p className="text-muted small">
                  ATS-friendly resumes, projects & interview-ready profiles.
                </p>
                <Button
                  as={Link}
                  to="/resume-tips"
                  variant="primary"
                  size="sm"
                >
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Popular Questions */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="fw-bold mb-4">Popular Interview Questions</h2>

          <Row className="g-3">
            <Col md={6}>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Badge bg="secondary" className="mb-2">Technical</Badge>
                  <h6>Explain OOP concepts in Java</h6>
                  <p className="text-muted small">
                    Encapsulation, inheritance, abstraction & polymorphism with examples.
                  </p>
                  <Link to="/interview-questions/technical" className="small">
                    View more →
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Badge bg="secondary" className="mb-2">HR</Badge>
                  <h6>Tell me about yourself</h6>
                  <p className="text-muted small">
                    A structured approach recruiters prefer.
                  </p>
                  <Link to="/interview-questions/hr" className="small">
                    View more →
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Badge bg="secondary" className="mb-2">Aptitude</Badge>
                  <h6>Time and Work problems</h6>
                  <p className="text-muted small">
                    Smart shortcuts and common patterns.
                  </p>
                  <Link to="/interview-questions/aptitude" className="small">
                    View more →
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Badge bg="secondary" className="mb-2">Resume</Badge>
                  <h6>How to write project descriptions</h6>
                  <p className="text-muted small">
                    Highlight impact, tools & outcomes.
                  </p>
                  <Link to="/resume-tips" className="small">
                    View more →
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tips Section */}
      <Container className="py-5">
        <h2 className="fw-bold mb-4">Expert Interview Tips</h2>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">✔ Understand job description clearly</li>
          <li className="list-group-item">✔ Practice mock tests regularly</li>
          <li className="list-group-item">✔ Strengthen fundamentals before advanced topics</li>
          <li className="list-group-item">✔ Prepare real project explanations</li>
          <li className="list-group-item">✔ Track your preparation progress</li>
        </ul>
      </Container>

      {/* Call to Action */}
      <section className="bg-dark text-light py-5 text-center">
        <Container>
          <h2 className="fw-bold mb-3">Ready to Crack Your Interview?</h2>
          <p className="mb-4">
            Practice daily, track progress, and walk into interviews with confidence.
          </p>
          <Button
            as={Link}
            to="/progress"
            variant="success"
            size="lg"
          >
            Track My Progress
          </Button>
        </Container>
      </section>
    </>
  )
}

export default InterviewPreparation
