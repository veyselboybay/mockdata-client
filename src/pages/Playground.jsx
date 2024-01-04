import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaExchangeAlt, FaInfoCircle } from "react-icons/fa";
import BottomNav from '../components/BottomNav'
import { toast } from 'react-toastify';
import AuthModal from '../components/AuthModal';
import { useSelector } from 'react-redux';
const Playground = () => {
    const { isLoggedIn } = useSelector(state => state.login);
    return (
        <Container>
            <AuthModal />
            <div className='playground-intro-text-container'>
                <p><FaInfoCircle /> You can try out the MockDataAPI in the playground area by inputting a data model, and in return, receive a piece of simulated data that matches your model.</p>
            </div>
            <Row className='playground-row'>
                <Col md={5}>
                    <label htmlFor="" className='playground-box-label'>Your Data Model</label>
                    <textarea className='playground-textarea' placeholder={
                        ` - Create a data model in JSON format like example below.\n{\n
                    "id":"Integer",\n
                    "name":"String",\n
                    ...
                        \n}`}></textarea>
                </Col>
                <Col md={2} className='playground-request-button'>
                    <Button variant='outline-success' onClick={(e) => toast.success('We got your request!')}><FaExchangeAlt /> Request</Button>
                </Col>
                <Col md={5} >
                    <label htmlFor="" className='playground-box-label' >Your Mock Data</label>
                    <textarea className='playground-textarea'></textarea>
                </Col>
            </Row>
            <BottomNav />
        </Container>
    )
}

export default Playground