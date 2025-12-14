import React, { useState } from 'react'
import { Alert, Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import api from '../api/api.js'
import { useNavigate } from 'react-router-dom'

const Login = ({ log, setLog, setProfile }) => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const normalizeEmail = (email) => {
    return email
      .trim()
      .toLowerCase()
      .replace(/^www\./, "");
  };

  const handleChange = (e) => {

    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const [msg, setMsg] = useState({
    show: false,
    type: "",
    text: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const norEmail = normalizeEmail(user.email);

    const res = (await api.get(`/users?email=${norEmail}`)).data;

    if (res.length < 1) {

      setMsg({
        show: true,
        type: "warning",
        text: "User not found!"
      });

      return;
    }

    console.log(res);

    if (res[0].password == user.password) {

      setMsg({
        show: true,
        type: "success",
        text: "Logged in successfully!"
      });

      const pro = (await api.get(`/profile?email=${norEmail}`)).data;

      console.log(pro);

      setProfile(pro[0]);

      localStorage.setItem("log", JSON.stringify(res));

      setLog(JSON.parse(localStorage.getItem("log"))[0]);

      setTimeout(() => {
        navigate("/");
      }, 2000);

    } else {
      setMsg(
        {
          show: true,
          type: "danger",
          text: "Username or password incorrect!"
        }
      );
    }

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
          <h2 className='text-success mt-3'>Login</h2>

          <Form onSubmit={handleSubmit}>
            <Row className='justify-content-center'>

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
                <Button className='my-3' size="lg" variant='success' type='submit'>Login</Button>
              </Col>
            </Row>
          </Form>
        </>
      ) : (
        <>
          <h2 className='text-center mt-5 text-success'>Logged in as : {log.name}</h2>
        </>
      )}


    </section>
  )
}

export default Login