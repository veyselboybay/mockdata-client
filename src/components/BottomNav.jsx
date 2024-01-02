import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const BottomNav = () => {
    return (
        <Navbar fixed='bottom' >
            <Container>
                <p style={{ fontSize: 'small', fontStyle: 'italic' }}>&copy;2024 MockDataAPI. All rights reserved.</p>
            </Container>
        </Navbar>
    )
}

export default BottomNav