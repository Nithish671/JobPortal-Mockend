import React from "react";
import { Card, Container, ProgressBar } from "react-bootstrap";

const ProgressTracking = () => {
  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-1">Progress Tracking</h2>
      <p className="text-muted mb-4">
        Monitor your interview preparation journey.
      </p>

      <Card className="shadow-sm p-4 mb-3">
        <h6 className="mb-2">Interview Questions Completed</h6>
        <ProgressBar now={75} label="75%" />
      </Card>

      <Card className="shadow-sm p-4 mb-3">
        <h6 className="mb-2">Mock Tests Attempted</h6>
        <ProgressBar now={50} label="50%" variant="success" />
      </Card>

      <Card className="shadow-sm p-4">
        <h6 className="mb-2">Overall Readiness</h6>
        <ProgressBar now={60} label="60%" variant="info" />
      </Card>
    </Container>
  );
};

export default ProgressTracking;
