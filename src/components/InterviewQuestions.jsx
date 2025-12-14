import React from "react";
import { Accordion, Container, Badge } from "react-bootstrap";

const InterviewQuestions = () => {
  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-1">Interview Questions</h2>
      <p className="text-muted mb-4">
        Curated questions commonly asked in real interviews.
      </p>

      <h5 className="mb-3">
        Technical Questions <Badge bg="primary">Popular</Badge>
      </h5>

      <Accordion className="mb-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Java?</Accordion.Header>
          <Accordion.Body>
            Java is a platform-independent, object-oriented programming
            language widely used for web, mobile, and enterprise applications.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Difference between == and equals()</Accordion.Header>
          <Accordion.Body>
            <b>==</b> compares memory reference, while <b>equals()</b> compares
            actual object values.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h5 className="mb-3">HR & Behavioral Questions</h5>

      <Accordion>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Tell me about yourself</Accordion.Header>
          <Accordion.Body>
            Briefly explain your education, skills, experience, and career goal.
            Keep it relevant to the job role.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>What are your strengths?</Accordion.Header>
          <Accordion.Body>
            Mention 2–3 strengths with real examples that match the job role.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default InterviewQuestions;
