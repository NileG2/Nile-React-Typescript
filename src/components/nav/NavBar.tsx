import React, { useState } from 'react'
import './Nav.scss'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import {FaSearch,FaUserAlt,FaShoppingCart,FaHandsHelping} from 'react-icons/fa'

const NavBar = () => {
    const categories = ["all", "electronics", "appliances", "fashion for kids", "fashion for men", "fashion for women", "toys and games"]
    const [choosen, setChoosen] = useState(categories[0])

    return (
        <div className='Nav'>
            <Navbar bg="bg-nav-bg" expand="lg" className='p-0' style={{background:"#232f3e"}}>
                <Container className='nav-font'>
                    <Navbar.Brand href="/">
                        <img  className='position-relative' style={{top:"-10px"}} width="100px" src="assets/logoWhite.png" ></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <div className='d-flex'>
                                <p className='m-0 p-2 text-white'>Search</p>
                                <div className='input-group'>
                                    <NavDropdown title={choosen} id="basic-nav-dropdown" className='std-btn std-btnGray p-0'>
                                        {
                                            categories.map((cat,index) => {
                                                return <NavDropdown.Item key={index} href="/products" onClick={() => { setChoosen(cat) }}>{cat}</NavDropdown.Item>
                                            })
                                        }
                                    </NavDropdown>
                                    <input className='form-control nav-input-length'></input>
                                    <button className='std-btn std-btnOrange nav-search-btn'>
                                        <FaSearch/>    
                                    </button>
                                </div>
                            </div>
                            <Nav.Link href="#" className='text-white'><FaUserAlt className='m-1' />Signin</Nav.Link>
                            <Nav.Link href="#" className='text-white'><FaShoppingCart className='m-1'/>Cart</Nav.Link>
                            <Nav.Link href="#" className='text-white'><FaHandsHelping className='m-1'/>Help</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar