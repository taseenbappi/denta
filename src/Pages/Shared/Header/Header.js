import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div className='shadow-sm'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  >
                <Container fluid >
                    <Navbar.Brand as={Link} to="/home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fw-bolder">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="#about">About</Nav.Link>
                            <Nav.Link as={Link} to="#contact">Contact</Nav.Link>
                            {
                                user.displayName &&
                                <img src={user.photoURL} alt="" height='50' width='50' className="rounded-circle m-auto p-1" />
                            }
                            <Nav.Link className="text-primary">{user?.displayName}</Nav.Link>
                            {
                                user.displayName ?
                                    <Nav.Link onClick={logOut}>Log Out</Nav.Link>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            <Nav.Link as={Link} to="#appointment"><button className="btn btn-warning">Appointment</button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;