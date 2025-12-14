import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const MockTests = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-1">Mock Test</h2>
      <p className="text-muted mb-4">
        Test your knowledge before attending interviews.
      </p>

      <Card className="shadow-sm p-4">
        <Form>
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">
              1. Which is an OOP concept?
            </Form.Label>
            <Form.Check type="radio" label="Inheritance" name="q1" />
            <Form.Check type="radio" label="Compilation" name="q1" />
            <Form.Check type="radio" label="Execution" name="q1" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">
              2. Java is:
            </Form.Label>
            <Form.Check type="radio" label="Platform Independent" name="q2" />
            <Form.Check type="radio" label="OS" name="q2" />
            <Form.Check type="radio" label="Database" name="q2" />
          </Form.Group>

          <Button onClick={() => setSubmitted(true)}>
            Submit Test
          </Button>
        </Form>

        {submitted && (
          <div className="mt-3 text-success fw-bold">
            Test completed! Score: 2 / 2
          </div>
        )}
      </Card>
    </Container>
  );
};

export default MockTests;
