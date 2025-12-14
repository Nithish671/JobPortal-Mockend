import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';

function NavB({ log, search, setSearch, setLog, setProfile }) {

    const loc = useLocation();

    const logOut = () => {

        setLog(null);

        setProfile({
            email: null,
            skills: [],
            experience: [],
            summary: null,
            phone: null,
            location: null
        });
    }

    return (
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to={"/"}><i className="bi bi-boombox-fill"></i></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/profile"}>Profile</Nav.Link>
                        <Nav.Link as={Link} to={"/job-search"}>Job Search</Nav.Link>
                        <Nav.Link as={Link} to={"/interview"}>Interview Preparation</Nav.Link>
                        {log &&
                            log.admin &&
                            <>
                                <Nav.Link as={Link} to={"/users"}>See Users</Nav.Link>
                                <Nav.Link as={Link} to={"/add-job"}>Add Job</Nav.Link>
                            </>
                        }

                        {!log &&
                            <>
                                <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                                <Nav.Link as={Link} to={"/signup"}>Signup</Nav.Link>
                            </>
                        }
                        <Nav.Link as={Link} to={"/contact"}>Contact Us</Nav.Link>
                        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                        {log &&
                            <Nav.Link as={Button} className='no-hover-btn' onClick={() => logOut()}>Logout</Nav.Link>
                        }
                    </Nav>
                    {loc.pathname === "/job-search" && (
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                aria-label="Search"
                            />
                        </Form>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavB;