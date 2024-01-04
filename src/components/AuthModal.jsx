import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const AuthModal = () => {
    const { isLoggedIn } = useSelector(state => state.login);
    const [show, setShow] = useState(!(isLoggedIn || localStorage.getItem('accessToken') !== null));
    const navigate = useNavigate();
    useEffect(() => {
        setShow(!(isLoggedIn || localStorage.getItem('accessToken') !== null))
    }, [localStorage.getItem('accessToken')], isLoggedIn)
    return (
        <Modal
            show={show}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title>Login Required!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                In order to use the playground area, you need to login.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={(e) => navigate('/documentation')}>
                    Go to Documentation
                </Button>
                <Button variant="primary" onClick={(e) => navigate('/login')}>Login</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AuthModal