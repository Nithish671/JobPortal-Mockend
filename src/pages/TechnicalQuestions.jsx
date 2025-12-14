import React from "react";
import { Accordion, Container, Badge } from "react-bootstrap";

const TechnicalQuestions = () => {
    return (
        <Container className="py-5">
            <h2 className="fw-bold mb-2">
                Technical Interview Questions <Badge bg="primary">Tech</Badge>
            </h2>
            <p className="text-muted mb-4">
                Frequently asked technical questions with clear explanations.
            </p>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is OOP?</Accordion.Header>
                    <Accordion.Body>
                        Object-Oriented Programming is a programming paradigm based on
                        objects and classes. Key concepts include encapsulation,
                        inheritance, polymorphism, and abstraction.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Difference between == and equals() in Java</Accordion.Header>
                    <Accordion.Body>
                        <b>==</b> compares object references, while <b>equals()</b>
                        compares the actual content of objects.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is REST API?</Accordion.Header>
                    <Accordion.Body>
                        REST API follows stateless communication using HTTP methods like
                        GET, POST, PUT, and DELETE.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default TechnicalQuestions;
