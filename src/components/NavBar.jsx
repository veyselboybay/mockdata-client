import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { MdLogin } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { logout, setCredentials } from '../features/LoginSlice'

const NavBar = () => {
    const { isLoggedIn } = useSelector(state => state.login);
    const navigate = useNavigate()
    const dispatch = useDispatch();
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
                        <Nav.Link onClick={isLoggedIn ? (e) => dispatch(logout()) : (e) => navigate("/login")}><MdLogin /> {isLoggedIn ? 'Logout' : 'Login'}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar


