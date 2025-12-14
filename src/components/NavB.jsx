import { Form, Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function NavB({ log, search, setSearch, setLog, setProfile }) {

    const loc = useLocation();

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
    };

    return (
        <Navbar bg="light" fixed="top" expand="lg" className="shadow-sm">
            <Container fluid>

                <Navbar.Brand as={Link} to="/">
                    <i className="bi bi-boombox-fill fs-4"></i>
                </Navbar.Brand>

                {/* Toggle appears only below lg */}
                <Navbar.Toggle aria-controls="responsive-navbar" />

                {/* Collapsed (Offcanvas on small screens) */}
                <Navbar.Offcanvas
                    id="responsive-navbar"
                    aria-labelledby="responsive-navbar-label"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="responsive-navbar-label">
                            Job Portal
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className="me-auto">

                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                            <Nav.Link as={Link} to="/job-search">Job Search</Nav.Link>
                            <Nav.Link as={Link} to="/interview">Interview Preparation</Nav.Link>

                            {log?.admin && (
                                <>
                                    <Nav.Link as={Link} to="/users">See Users</Nav.Link>
                                    <Nav.Link as={Link} to="/add-job">Add Job</Nav.Link>
                                </>
                            )}

                            {!log && (
                                <>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                                </>
                            )}

                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>

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

                        {/* Search bar only on Job Search page */}
                        {loc.pathname === "/job-search" && (
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

                {/* Desktop Logout button */}
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
