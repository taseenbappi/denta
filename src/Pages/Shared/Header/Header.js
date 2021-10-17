import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="mb-5">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
                <Container fluid >
                    <Navbar.Brand as={Link} to="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="#about">About</Nav.Link>
                            <Nav.Link as={Link} to="#contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="#appointment">Appointment</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;