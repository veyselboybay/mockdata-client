import React from 'react'
import { Container, Button, Col, Row } from 'react-bootstrap'


const Home = () => {
    return (
        <Container className='home-container'>
            <p style={{ paddingBottom: '30px' }}><span className='home-brand-text'>{"{"}"MockData"{":"}"API"{"}"}</span></p>
            <p className='home-brand-text-two'><span style={{ textDecoration: 'underline' }}>Free</span> fake data for testing based on 'your data model'.</p>
            <p className='home-brand-text-two'>Request with your data model, get your <span style={{ textDecoration: 'underline' }}>custom fake data</span>.</p>

            <p className='home-brand-text-three'>Serving quality fake data, powered by AI.</p>

            <div style={{ paddingTop: '25px' }}>
                <div className='home-button-one'>Get Started</div>
                <div className='home-button-two'>Documentation</div>
            </div>

        </Container>
    )
}

export default Home