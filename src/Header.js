import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './Header.css'


export default function Header() {
    return (
        <div className="header1">
             <Navbar bg="black" variant="dark" sticky="top" expand="lg" position="fixed" collapseOnSelect>  
                <Container>
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix logo"/>
           
                </Container>
            </Navbar>
            
        </div>
    )
}
