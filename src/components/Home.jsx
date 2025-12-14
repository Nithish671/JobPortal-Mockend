import React, { useRef } from 'react'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = ({ jobs, log }) => {

    const scrollRef = useRef(null)

    const slideLeft = () => {
        scrollRef.current.scrollLeft -= 300
    }

    const slideRight = () => {
        scrollRef.current.scrollLeft += 300
    }

    return (
        <>
            {/* HERO LANDING CAROUSEL */}
            <Carousel fade interval={4000} className="hero-carousel">
                <Carousel.Item>
                    <div className="hero-slide">
                        <img
                            src="https://mahadjobs.com/wp-content/uploads/2021/07/Jobs-Search-Online.jpg"
                            alt="Find Jobs"
                        />

                        <div className="hero-overlay d-flex align-items-center">
                            <Container>
                                <Row>
                                    <Col md={7}>
                                        <h1 className="fw-bold mb-3">
                                            Find Your Dream Job
                                        </h1>
                                        <p className="fs-5 mb-4">
                                            Explore thousands of jobs from top companies and apply with confidence.
                                        </p>

                                        <Button
                                            as={Link}
                                            to="/job-search"
                                            variant="light"
                                            size="lg"
                                            className="me-3"
                                        >
                                            Browse Jobs
                                        </Button>

                                        <Button
                                            as={Link}
                                            to="/interview"
                                            variant="outline-light"
                                            size="lg"
                                        >
                                            Interview Prep
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="hero-slide">
                        <img
                            src="https://www.interviewtoolkit.co.uk/wp-content/uploads/2023/11/Practicing-for-Your-Interview.jpg"
                            alt="Interview Preparation"
                        />

                        <div className="hero-overlay d-flex align-items-center">
                            <Container>
                                <Row>
                                    <Col md={7}>
                                        <h1 className="fw-bold mb-3">
                                            Prepare. Practice. Succeed.
                                        </h1>
                                        <p className="fs-5 mb-4">
                                            Crack interviews with curated questions, mock tests and expert tips.
                                        </p>

                                        <Button
                                            as={Link}
                                            to="/interview-questions/technical"
                                            variant="light"
                                            size="lg"
                                            className="me-3"
                                        >
                                            Interview Questions
                                        </Button>

                                        <Button
                                            as={Link}
                                            to="/mock-tests"
                                            variant="outline-light"
                                            size="lg"
                                        >
                                            Mock Tests
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="hero-slide">
                        <img
                            src="https://news.umanitoba.ca/wp-content/uploads/2021/10/Career-Month-1_Drupal-1200x799.png"
                            alt="Career Growth"
                        />

                        <div className="hero-overlay d-flex align-items-center">
                            <Container>
                                <Row>
                                    <Col md={7}>
                                        <h1 className="fw-bold mb-3">
                                            Build a Strong Career
                                        </h1>
                                        <p className="fs-5 mb-4">
                                            Improve skills, track progress and get hired faster.
                                        </p>

                                        <Button
                                            as={Link}
                                            to="/resume-tips"
                                            variant="light"
                                            size="lg"
                                            className="me-3"
                                        >
                                            Resume Tips
                                        </Button>

                                        <Button
                                            as={Link}
                                            to="/progress"
                                            variant="outline-light"
                                            size="lg"
                                        >
                                            Track Progress
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>

            {/* RECENT JOBS SECTION */}
            <section className="py-5 bg-success-subtle">
                <h2 className="text-center text-success fw-bold">
                    Jobs Recently Posted
                </h2>

                <Container className="mt-4 position-relative bg-success-subtle">

                    <Button
                        variant="dark"
                        className="scroll-btn rounded-circle"
                        style={{ left: 0 }}
                        onClick={slideLeft}
                    >
                        ‹
                    </Button>

                    <Button
                        variant="dark"
                        className="scroll-btn rounded-circle"
                        style={{ right: 0 }}
                        onClick={slideRight}
                    >
                        ›
                    </Button>

                    <div ref={scrollRef} className="horizontal-scroll">
                        {jobs.map(job => (
                            <Card
                                key={job.id}
                                className="me-3 shadow-sm"
                                style={{ minWidth: "260px" }}
                            >
                                <Card.Header className="fw-semibold">
                                    {job.org}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="text-truncate">
                                        {job.title}
                                    </Card.Title>
                                    <Card.Text className="small text-muted">
                                        Skills: {job.skills}
                                    </Card.Text>

                                    <Button
                                        as={Link}
                                        state={{ job }}
                                        to="/job"
                                        size="sm"
                                    >
                                        View Job
                                    </Button>
                                </Card.Body>
                            </Card>
                        ))}

                        <div className="d-flex align-items-center ms-3">
                            <Link
                                to="/job-search"
                                className="fw-bold text-decoration-none"
                            >
                                Explore More →
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* LOGIN / SIGNUP CTA */}
            {!log && (
                <Container>
                    <Row className="justify-content-center my-5">
                        <Col lg={4} className="text-center">
                            <Button
                                variant="danger"
                                as={Link}
                                to="/signup"
                                className="me-2"
                            >
                                Signup
                            </Button>
                            <Button
                                variant="success"
                                as={Link}
                                to="/login"
                            >
                                Login
                            </Button>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    )
}

export default Home
