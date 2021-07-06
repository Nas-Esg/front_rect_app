  
import React from 'react'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import StyleNavigationBar from '../../styles/navigation/navigationBar.module.css'
export default function NavigatinoBar(){
    return (
        <>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleNavigationBar.navContainer} data-aos="fade-down">
                <Navbar className={StyleNavigationBar.navbar} expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className={StyleNavigationBar.navLink} href="/">Accueil</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link className={StyleNavigationBar.login} href="/login">Log in</Nav.Link>
                            <Nav.Link className={StyleNavigationBar.signup} href="/signup">Sign up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </Col>
        </>
    )
}