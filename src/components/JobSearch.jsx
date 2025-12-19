import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../api/api';

const JobSearch = ({ jobs, search, getJobs, log }) => {

    const filJobs = jobs.filter((j) =>
        j.title.toLowerCase().includes(search.toLowerCase())
    );

    const deleteJob = async (id) => {

        await api.delete(`/delete-job/${id}`);

        getJobs();
    }

    return (
        <section className="p-4">
            <h2 className='text-center text-primary fw-bold mb-4'>
                Job Search Results
            </h2>

            {filJobs.length > 0 ? (
                <div
                    className="d-flex flex-column gap-4 mx-auto"
                    style={{ maxWidth: "850px" }}
                >
                    {filJobs.map((job) => (
                        <Card
                            key={job.id}
                            className="p-3 shadow-sm job-card position-relative"
                            style={{
                                borderRadius: "16px",
                                background: "rgba(255,255,255,0.7)",
                                backdropFilter: "blur(10px)",
                                transition: "all .3s ease",
                                cursor: "pointer"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.02)";
                                e.currentTarget.style.boxShadow =
                                    "0 8px 22px rgba(0,0,0,0.25)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow =
                                    "0 4px 12px rgba(0,0,0,0.1)";
                            }}
                        >

                            {log && log.admin && <Button
                                variant="outline-danger"
                                size="md"
                                className="position-absolute"
                                style={{ top: "-12px", right: "-12px", zIndex: 10, border: "none" }}
                                onClick={() => deleteJob(job.id)}
                            >
                                <i className="bi bi-trash3"></i>
                            </Button>}


                            <Link
                                state={{ job }}
                                to={"/job"}
                                className="text-decoration-none text-dark"
                            >
                                <div className="d-flex justify-content-between align-items-center">
                                    <h4 className="fw-semibold mb-0">{job.title}</h4>

                                    <Badge
                                        bg={job.exp > 0 ? "primary" : "success"}
                                        style={{ padding: "10px", fontSize: "0.9rem" }}
                                    >
                                        {job.exp > 0 ? `${job.exp}+ years` : "Fresher"}
                                    </Badge>
                                </div>

                                <p className="mt-2 text-muted mb-1">{job.org}</p>

                                <div className="mt-1">
                                    {job.skills?.split(",").slice(0, 3).map((s, i) => (
                                        <Badge
                                            key={i}
                                            bg=""
                                            className="me-2"
                                            style={{
                                                background: "rgba(0,0,0,0.1)",
                                                color: "#333",
                                                padding: "8px",
                                                borderRadius: "12px",
                                                backdropFilter: "blur(6px)"
                                            }}
                                        >
                                            {s.trim()}
                                        </Badge>
                                    ))}
                                </div>
                            </Link>

                        </Card>
                    ))}
                </div>
            ) : (
                <h4 className="text-center mt-5 text-secondary">No jobs found.</h4>
            )}
        </section>
    );
};

export default JobSearch;
