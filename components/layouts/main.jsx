import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function MainLayout({children}){
    return (
        <Container className="p-0" fluid>
            <Row className="m-0">
                {children}
            </Row>
        </Container>
    )
}