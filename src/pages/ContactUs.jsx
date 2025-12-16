import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import api from '../api/api';

const ContactUs = () => {

    const [que, setQue] = useState({
        name: '',
        email: '',
        msg: ''
    });

    const [msg, setMsg] = useState({
        show: false,
        type: "",
        text: ""
    });

    const handleChange = (e) => {

        setQue({ ...que, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        const res = api.post("/query", que);

        setQue({
            name: '',
            email: '',
            msg: ''
        });

        setMsg({
            show: true,
            type: "success",
            text: "Submitted successfully!"
        });

        setTimeout(() => {
            setMsg({...msg, show: false});
        }, 2000);

    }

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

            {msg.show &&
                <Container>
                    <Row className='justify-content-center'>
                        <Col md={7}>
                            <Alert className='mt-5' variant={msg.type} dismissible onClose={() => setMsg({ ...msg, show: false })}>{msg.text}</Alert>
                        </Col>
                    </Row>
                </Container>
            }

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

                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name='name' onChange={handleChange} value={que.name} required placeholder="Enter your name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name='email' onChange={handleChange} value={que.email} required placeholder="Enter your email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            placeholder="Write your message..."
                                            name='msg' onChange={handleChange} value={que.msg} required
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
