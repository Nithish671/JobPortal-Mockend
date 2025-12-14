import React from 'react'
import { Button, Stack, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Overl from './Overl';
import SkillsOv from './SkillsOv';
import ExpOv from './ExpOv'
import api from '../api/api';

const Profile = ({ log, setLog, profile, setProfile }) => {

    const deleteSkill = async (i) => {
        const del = profile.skills.filter((item) => item !== i);
        setProfile({ ...profile, skills: del });
        await api.put(`/profile/${profile.id}`, { ...profile, skills: del });
    };

    const deleteExp = async (i) => {
        const del = profile.experience.filter((_, index) => index !== i);
        setProfile({ ...profile, experience: del });
        await api.put(`/profile/${profile.id}`, { ...profile, experience: del });
    };

    return (
        <section className="container mb-5 mt-5">

            {log ? (
                <>
                    {/* Profile Header */}
                    <section
                        className="p-4 mb-4 rounded-4 shadow"
                        style={{ background: "#ffffff", position: "relative" }}
                    >
                        <div style={{ position: "absolute", right: "20px", top: "20px" }}>
                            <Overl setProfile={setProfile} profile={profile} />
                        </div>

                        <h1 className="text-primary fw-bold mb-3 text-center">My Profile</h1>

                        <div className="text-center">
                            <h2 className="fw-semibold">{log.name}</h2>
                            <p className="text-muted mb-1">Email: {log.email}</p>
                            {profile.phone && (
                                <p className="text-muted mb-1">Phone: {profile.phone}</p>
                            )}
                            {profile.summary && (
                                <p className="mt-3">{profile.summary}</p>
                            )}
                        </div>
                    </section>

                    {/* Skills */}
                    <section
                        className="p-4 mb-4 rounded-4 shadow"
                        style={{ background: "#ffffff" }}
                    >
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h2 className="text-danger fw-bold">Skills</h2>
                            <SkillsOv setProfile={setProfile} profile={profile} />
                        </div>

                        <Stack direction="horizontal" gap={3} style={{ flexWrap: "wrap" }}>
                            {profile.skills.map((sk, index) => (
                                <Badge
                                    key={index}
                                    pill
                                    bg="light"
                                    className="text-dark px-3 py-2 d-flex align-items-center"
                                    style={{ border: "1px solid #ddd", fontSize: "1rem" }}
                                >
                                    {sk}
                                    <Button
                                        size="sm"
                                        variant="outline-danger"
                                        className="ms-2 py-0 px-1"
                                        style={{ borderRadius: "50%" }}
                                        onClick={() => deleteSkill(sk)}
                                    >
                                        ✕
                                    </Button>
                                </Badge>
                            ))}
                        </Stack>
                    </section>

                    {/* Experience */}
                    <section
                        className="p-4 mb-4 rounded-4 shadow"
                        style={{ background: "#ffffff" }}
                    >
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h2 className="text-danger fw-bold">Experience</h2>
                            <ExpOv setProfile={setProfile} profile={profile} />
                        </div>

                        {profile.experience.length === 0 && (
                            <p className="text-muted">No experience added yet.</p>
                        )}

                        {profile.experience.map((ele, index) => (
                            <div
                                key={index}
                                className="border rounded p-3 mb-3"
                                style={{ background: "#f9f9f9" }}
                            >
                                <h4 className="fw-semibold">
                                    {ele.name}
                                    <Button
                                        size="sm"
                                        variant="outline-danger"
                                        className="ms-3"
                                        onClick={() => deleteExp(index)}
                                    >
                                        Delete
                                    </Button>
                                </h4>

                                <p className="mb-1">Role: {ele.role}</p>

                                <small className="text-muted">
                                    Start: {new Date(ele.joinD).toLocaleDateString("en-GB")}
                                    {"  "} | {"  "}
                                    End: {new Date(ele.lastW).toLocaleDateString("en-GB")}
                                </small>
                            </div>
                        ))}
                    </section>
                </>
            ) : (
                <div className="text-center">
                    <h2 className="text-warning">Login to see your Profile!</h2>
                    <Button as={Link} to="/login" variant="primary" size="lg" className="mt-3">
                        Login
                    </Button>
                </div>
            )}
        </section>
    );
};

export default Profile;
