import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Container, Row, Alert, Col } from 'react-bootstrap'
import api from '../api/api';

const AddJob = ({ getJobs }) => {

    const [job, setJob] = useState({
        org: "",
        title: "",
        jd: "",
        skills: "",
        exp: ""
    });

    const [msg, setMsg] = useState({
        show: false,
        type: "",
        text: ""
    });

    const handleChange = (e) => {

        setJob({ ...job, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await api.post("/save-job", job);

        setMsg({
            show: true,
            type: "success",
            text: "Job added successfully!"
        });

        setTimeout(() => {
            setMsg({...msg, show: false});
        }, 2000);

        setJob({
            org: "",
            title: "",
            jd: "",
            skills: "",
            exp: ""
        });

        getJobs();
    }

    return (
        <section className='shadow-lg p-3 m-3 bg-body-tertiary rounded'>

            {msg.show &&
                <Container>
                    <Row className='justify-content-center'>
                        <Col md={7}>
                            <Alert className='mt-5' variant={msg.type} dismissible onClose={() => setMsg({ ...msg, show: false })}>{msg.text}</Alert>
                        </Col>
                    </Row>
                </Container>
            }

            <h2 className='text-primary text-center mb-3'>Add Job</h2>
            <Form onSubmit={handleSubmit} className='w-75 m-auto'>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Organization name"
                    className="mb-3"
                >
                    <Form.Control name='org' value={job.org} onChange={handleChange} type="text" placeholder="name@example.com" required />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Job title"
                    className="mb-3"
                >
                    <Form.Control name='title' value={job.title} onChange={handleChange} type="text" placeholder="name@example.com" required />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Experience"
                    className="mb-3"
                >
                    <Form.Control name='exp' value={job.exp} onChange={handleChange} type="number" placeholder="name@example.com" required />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Key skills"
                    className="mb-3"
                >
                    <Form.Control type="text" value={job.skills} name='skills' onChange={handleChange} placeholder="name@example.com" required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Job Description">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        name='jd'
                        onChange={handleChange}
                        value={job.jd}
                        required
                    />
                </FloatingLabel>
                <Button className='my-3' type='submit' variant='primary' size='lg'>Add</Button>
            </Form>
        </section>
    )
}

export default AddJob