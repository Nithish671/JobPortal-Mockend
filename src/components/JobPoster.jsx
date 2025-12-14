import React from 'react'
import { Button, Card, Badge, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'
import api from '../api/api';

const JobPoster = ({ log, setLog, refLog }) => {

    const { state } = useLocation();
    const { job } = state;

    const applyJob = async (jobId) => {

        const aJobs = log.appJobs;

        aJobs.push(jobId);

        setLog({ ...log, appJobs: aJobs });

        const res = (await api.put(`/users/${log.id}`, log)).data;

        alert("Applied successfully!");
    }


    return (
        <section className="d-flex justify-content-center align-items-start p-4 mt-3">
            <Card className="shadow-lg p-4 rounded-4" style={{ width: "55rem", maxWidth: "95%" }}>
                <Card.Body>

                    <h1 className="text-dark fw-bold mb-4 text-center">Apply for Job</h1>

                    <div className="text-center mb-4">
                        <h2 className="text-primary fw-semibold">{job.org}</h2>
                        <h4 className="mt-2 text-dark">{job.title}</h4>
                    </div>

                    <div className="my-4">
                        <h5 className="text-secondary fw-semibold">
                            Key Skills:
                            <span className="ms-2">
                                {job.skills?.split(',').map((skill, index) => (
                                    <Badge bg="info" text="dark" key={index} className="me-2 p-2">
                                        {skill.trim()}
                                    </Badge>
                                ))}
                            </span>
                        </h5>

                        <h5 className="text-secondary fw-semibold mt-3">
                            Experience:
                            <span className="ms-2 text-dark">
                                {job.exp > 0 ? `${job.exp}+ years` : "Fresher"}
                            </span>
                        </h5>
                    </div>

                    <div className="my-4">
                        <h5 className="text-secondary fw-semibold mb-2">Job Description:</h5>
                        <p className="text-muted fs-6 lh-lg bg-light p-3 rounded-3 border">
                            {job.jd}
                        </p>
                    </div>

                    <div className="text-center mt-4">
                        {log ? (
                            <>
                                {log.appJobs.includes(job.id) ? (
                                    <p className='text-success'>Applied!</p>
                                ) : (
                                    <Button onClick={() => applyJob(job.id)} variant="primary" size="lg" className="px-4 py-2 rounded-pill">
                                        Apply Now
                                    </Button>
                                )}
                            </>
                        ) : (
                            <>
                                <h2 className='text-primary'>Login to Apply!</h2>
                                <Row className='justify-content-center my-3'>
                                    <Col lg={3}><Button variant='danger' as={Link} to={"/signup"}>Signup</Button>
                                        <span> / </span>
                                        <Button variant='success' as={Link} to={"/login"}>Login</Button></Col>
                                </Row>
                            </>
                        )}
                    </div>

                </Card.Body>
            </Card>
        </section>
    )
}

export default JobPoster;
