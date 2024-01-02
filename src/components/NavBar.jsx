import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { MdLogin } from "react-icons/md";

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{ borderBottom: '1px solid green' }}>
            <Container>
                <Navbar.Brand onClick={(e) => navigate("/")}><span className='navbar-brand'>{"{"}"MockData"{":"}"API"{"}"}</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={(e) => navigate("/documentation")}>Documentation</Nav.Link>
                        <Nav.Link onClick={(e) => navigate("/playground")}>Playground</Nav.Link>
                        <Nav.Link onClick={(e) => navigate("/pricing")}>Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={(e) => navigate("/auth")}><MdLogin /> Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar


