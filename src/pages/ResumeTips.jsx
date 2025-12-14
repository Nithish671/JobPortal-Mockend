import React from "react";
import { Card, Container, ListGroup } from "react-bootstrap";

const ResumeTips = () => {
    return (
        <Container className="py-5">
            <h2 className="fw-bold mb-2">Resume & Profile Tips</h2>
            <p className="text-muted mb-4">
                Build a strong resume that gets shortlisted by recruiters.
            </p>

            <Card className="shadow-sm mb-4">
                <Card.Body>
                    <h6 className="fw-bold">Resume Best Practices</h6>
                    <ListGroup variant="flush">
                        <ListGroup.Item>✔ Keep resume within 1–2 pages</ListGroup.Item>
                        <ListGroup.Item>✔ Use action verbs</ListGroup.Item>
                        <ListGroup.Item>✔ Mention measurable achievements</ListGroup.Item>
                        <ListGroup.Item>✔ Customize resume for each role</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

            <Card className="shadow-sm">
                <Card.Body>
                    <h6 className="fw-bold">Project Description Tips</h6>
                    <p className="text-muted small">
                        Mention technologies used, your role, and business impact clearly.
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ResumeTips;
