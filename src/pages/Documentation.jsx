import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Content from '../components/Content'
import SideBar from '../components/SideBar'

const Documentation = () => {
    return (
        <Container>
            <Row>
                <Col className='doc-sidebar' md={3}><SideBar /></Col>
                <Col className='doc-main' md={9}><Content /></Col>
            </Row>
        </Container>
    )
}

export default Documentation