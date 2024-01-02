import React from 'react'
import { Container, Button, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate()
    return (
        <Container className='home-container'>
            <p style={{ paddingBottom: '30px' }}><span className='home-brand-text'>{"{"}"MockData"{":"}"API"{"}"}</span></p>
            <p className='home-brand-text-two'><span style={{ textDecoration: 'underline' }}>Free</span> fake data for testing based on 'your data model'.</p>
            <p className='home-brand-text-two'>Request with your data model, get your <span style={{ textDecoration: 'underline' }}>custom fake data</span>.</p>

            <p className='home-brand-text-three'>Serving quality fake data, powered by AI.</p>

            <div style={{ paddingTop: '25px' }}>
                <div className='home-button-one' onClick={(e) => navigate('/auth')}>Get Started</div>
                <div className='home-button-two' onClick={(e) => navigate('/documentation')}>Documentation</div>
            </div>

        </Container>
    )
}

export default Home