import React from "react";
import { Accordion, Container, Badge } from "react-bootstrap";

const HrQuestions = () => {
  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-2">
        HR Interview Questions <Badge bg="secondary">HR</Badge>
      </h2>
      <p className="text-muted mb-4">
        Behavioral and communication-based questions asked in HR rounds.
      </p>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Tell me about yourself</Accordion.Header>
          <Accordion.Body>
            Start with your education, skills, experience, and end with your
            career goal related to the role.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>What are your strengths?</Accordion.Header>
          <Accordion.Body>
            Mention strengths relevant to the job and back them with real
            examples.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Why should we hire you?</Accordion.Header>
          <Accordion.Body>
            Explain how your skills, attitude, and learning ability match the
            company requirements.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default HrQuestions;
