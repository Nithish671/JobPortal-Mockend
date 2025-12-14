import React, { useState } from 'react'
import { Alert, Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import api from '../api/api'

const Signup = ({ log, setLog, setProfile, profile }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        admin: false
    });

    const [msg, setMsg] = useState({
        show: false,
        type: "",
        text: ""
    });


    const [cfPass, setCfPass] = useState('');

    const handleChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const normalizeEmail = (email) => {
        return email
            .trim()
            .toLowerCase()
            .replace(/^www\./, "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (user.password !== cfPass) {

            setMsg({
                show: true,
                type: "warning",
                text: "Password does not match!"
            });
            return;
        }

        setUser({ ...user, email: normalizeEmail(user.email) });


        const res = await api.get(`/users?email=${user.email}`);

        if (res.data.length > 0) {
            setMsg(
                {
                    show: true,
                    type: "warning",
                    text: "User already exists!"
                }
            );
            setTimeout(() => {
                navigate("/login");
            }, 2000);
            return;
        }

        const newProfile = {
            ...profile,
            email: user.email
        };

        setProfile({ ...profile, email: user.email });
        setTimeout(() => { }, 1000);

        await api.post("/users", user);
        await api.post("/profile", newProfile);

        setUser({
            name: "",
            email: "",
            password: ""
        });

        setCfPass('');

        setMsg({
            show: true,
            type: "success",
            text: "Signup successful! Redirecting to login..."
        });

        setTimeout(() => {
            navigate("/login");
        }, 2000);
    }

    return (
        <section className='text-center mt-5'>

            {msg.show &&
                <Container>
                    <Row className='justify-content-center'>
                        <Col md={7}>
                            <Alert variant={msg.type} dismissible onClose={() => setMsg({ ...msg, show: false })}>{msg.text}</Alert>
                        </Col>
                    </Row>
                </Container>
            }

            {!log ? (
                <>
                    <h2 className='text-danger mt-3'>Signup</h2>

                    <Form onSubmit={handleSubmit}>
                        <Row className='justify-content-center'>
                            <Col xs={12} md={8} lg={7}>
                                <FloatingLabel controlId="floatingName" label="Name" className='my-3'>
                                    <Form.Control type="text" placeholder="Name" name='name' value={user.name} onChange={handleChange} required />
                                </FloatingLabel>
                            </Col>

                            <Col xs={12} md={8} lg={7}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" value={user.email} name='email' onChange={handleChange} placeholder="name@example.com" required />
                                </FloatingLabel>
                            </Col>

                            <Col xs={12} md={8} lg={7}>
                                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                                    <Form.Control type="password" value={user.password} name='password' onChange={handleChange} placeholder="Password" required />
                                </FloatingLabel>
                            </Col>

                            <Col xs={12} md={8} lg={7}>
                                <FloatingLabel controlId="floatingPassword" label="Confirm Password">
                                    <Form.Control type="password" value={cfPass} name='cfPassword' onChange={(e) => setCfPass(e.target.value)} placeholder="Password" required />
                                </FloatingLabel>
                            </Col>

                            <Col xs={12} md={8} lg={7}>
                                <Button className='my-3' size="lg" variant='danger' type='submit'>Signup</Button>
                            </Col>
                        </Row>
                    </Form>
                </>
            ) : (
                <h2 className='text-center mt-5 text-success'>Logged in as : {log.name}</h2>
            )}


        </section>

    )
}

export default Signup
