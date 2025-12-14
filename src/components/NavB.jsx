import { useState } from 'react';
import {
    Form,
    Button,
    Container,
    Nav,
    Navbar,
    Offcanvas
} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function NavB({ log, search, setSearch, setLog, setProfile }) {

    const location = useLocation();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const isActive = (path) => location.pathname === path;

    const logOut = () => {
        setLog(null);
        localStorage.removeItem("log");

        setProfile({
            email: null,
            skills: [],
            experience: [],
            summary: null,
            phone: null,
            location: null
        });

        handleClose();
    };

    const NavItem = ({ to, children }) => (
        <Nav.Link
            as={Link}
            to={to}
            onClick={handleClose}
            className={isActive(to) ? "fw-bold text-success" : ""}
        >
            {children}
        </Nav.Link>
    );

    return (
        <Navbar bg="light" fixed="top" expand="lg" className="shadow-sm">
            <Container fluid>

                <Navbar.Brand as={Link} to="/">
                    <i className="bi bi-boombox-fill fs-4"></i>
                </Navbar.Brand>

                <Navbar.Toggle onClick={handleShow} />

                <Navbar.Offcanvas
                    show={show}
                    onHide={handleClose}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Job Portal</Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>

                        <Nav className="me-auto">
                            <NavItem to="/">Home</NavItem>
                            <NavItem to="/profile">Profile</NavItem>
                            <NavItem to="/job-search">Job Search</NavItem>
                            <NavItem to="/interview">Interview Preparation</NavItem>

                            {log?.admin && (
                                <>
                                    <NavItem to="/users">See Users</NavItem>
                                    <NavItem to="/add-job">Add Job</NavItem>
                                </>
                            )}

                            {!log && (
                                <>
                                    <NavItem to="/login">Login</NavItem>
                                    <NavItem to="/signup">Signup</NavItem>
                                </>
                            )}

                            <NavItem to="/contact">Contact Us</NavItem>
                            <NavItem to="/about">About</NavItem>

                            {log && (
                                <Button
                                    variant="outline-danger"
                                    className="mt-3 d-lg-none"
                                    onClick={logOut}
                                >
                                    Logout
                                </Button>
                            )}
                        </Nav>

                        {location.pathname === "/job-search" && (
                            <Form className="d-flex mt-4 mt-lg-0">
                                <Form.Control
                                    type="search"
                                    placeholder="Search jobs..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </Form>
                        )}

                    </Offcanvas.Body>
                </Navbar.Offcanvas>

                {/* Desktop logout */}
                {log && (
                    <Button
                        variant="outline-danger"
                        className="d-none d-lg-block"
                        onClick={logOut}
                    >
                        Logout
                    </Button>
                )}

            </Container>
        </Navbar>
    );
}

export default NavB;
