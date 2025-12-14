import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row className="py-5">
          <Col md={4} className="mb-4">
            <h4 className="fw-bold text-success">JobPortal</h4>
            <p className="text-muted small mt-3">
              JobPortal helps you find the right job, prepare for interviews,
              and grow your career with confidence.
            </p>

            <div className="social-icons">
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-github"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-envelope-fill"></i>
            </div>
          </Col>

          <Col md={2} className="mb-4">
            <h6 className="fw-semibold">For Job Seekers</h6>
            <ul className="footer-links">
              <li><Link to="/job-search">Find Jobs</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/resume-tips">Resume Tips</Link></li>
              <li><Link to="/hackathon">Hackathons</Link></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="fw-semibold">Interview Prep</h6>
            <ul className="footer-links">
              <li><Link to="/interview">Preparation Home</Link></li>
              <li><Link to="/interview-questions/technical">Technical Questions</Link></li>
              <li><Link to="/interview-questions/hr">HR Questions</Link></li>
              <li><Link to="/interview-questions/aptitude">Aptitude Tests</Link></li>
              <li><Link to="/mock-tests">Mock Tests</Link></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="fw-semibold">Company</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/signup">Create Account</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/progress">Progress Tracking</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </Col>
        </Row>
        
        <Row className="border-top pt-3">
          <Col className="text-center">
            <p className="small text-muted mb-0">
              © {new Date().getFullYear()} JobPortal. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
