import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import Travel from '../../assets/travel.png'

function Header() {
    return (
        <Navbar className='py-0' bg="dark" variant="dark">
            <Navbar.Brand>
                <img
                    src={Travel}
                    width="30"
                    height="30"
                    className="d-inline-block"
                    alt="Travel logo"
                />
                <h3 className='d-inline-block ml-2 align-center'>Travel Advisor</h3>
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header
