import React from "react";
import { Card, Container } from "react-bootstrap";

const AptitudeQuestions = () => {
    return (
        <Container className="py-5">
            <h2 className="fw-bold mb-2">Aptitude Questions</h2>
            <p className="text-muted mb-4">
                Improve your logical reasoning and problem-solving skills.
            </p>

            <Card className="shadow-sm p-4 mb-3">
                <h6>Time & Work</h6>
                <p className="text-muted small">
                    If A can complete a work in 10 days and B in 20 days, together they
                    can complete the work in 6.67 days.
                </p>
            </Card>

            <Card className="shadow-sm p-4 mb-3">
                <h6>Percentage</h6>
                <p className="text-muted small">
                    Increase from 50 to 60 is a 20% increase.
                </p>
            </Card>

            <Card className="shadow-sm p-4">
                <h6>Logical Reasoning</h6>
                <p className="text-muted small">
                    Identify patterns, sequences, and relationships logically.
                </p>
            </Card>
        </Container>
    );
};

export default AptitudeQuestions;
