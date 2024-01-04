import React, { useState } from 'react'
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'
import { FaExchangeAlt, FaInfoCircle } from "react-icons/fa";
import BottomNav from '../components/BottomNav'
import { toast } from 'react-toastify';
import AuthModal from '../components/AuthModal';
import { useSelector } from 'react-redux';
import axios from 'axios';

const base_url = import.meta.env.VITE_BASE_URL;

const Playground = () => {
    const { isLoggedIn, accessToken, apiKey } = useSelector(state => state.login);
    const [dataModel, setDataModel] = useState(null);
    const [mockData, setMockData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleRequest = async (e) => {
        e.preventDefault();
        if (dataModel === null || dataModel === '') {
            return toast.error('Please provide data model!')
        }
        setIsLoading(true)
        try {
            // console.log(JSON.parse(dataModel))
            const res = await axios.post(`${base_url}/api/v1/playground/${apiKey}`, JSON.parse(dataModel), {
                headers: {
                    Authorization: accessToken
                }
            });
            const ta = document.getElementById("textarea-playground");
            ta.value = res.data.msg;
            setMockData(res.data.msg)
            setIsLoading(false)
        } catch (error) {
            // toast.error(error.response.data.msg);
            toast.error('Something Went wrong, check your model.');
            setIsLoading(false)
        }
    }
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
                        \n}`} onChange={(e) => setDataModel(e.target.value)}></textarea>
                </Col>
                <Col md={2} className='playground-request-button'>
                    <Button variant='outline-success' onClick={(e) => handleRequest(e)}>{isLoading ? <Spinner /> : <FaExchangeAlt />}</Button>
                </Col>
                <Col md={5} >
                    <label htmlFor="" className='playground-box-label' >Your Mock Data</label>
                    <textarea className='playground-textarea' id='textarea-playground'></textarea>
                </Col>
            </Row>
            <BottomNav />
        </Container>
    )
}

export default Playground