import React from 'react';
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import SearchIcon from "@material-ui/icons/Search";
import { FaShoppingCart, FaUserAlt, FaHandsHelping, FaSearch } from 'react-icons/fa';
import "./Navbar.scss";
const Styles = styled.div`
  .navbar { background-color: #37475a; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
    &:hover { color: white; };
    padding-left: 20px;
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  .header__logo {
    width: 100px;
    object-fit: contain;
    margin: 0 10px;
    margin-top: 4px;
    margin-bottom: 14px;
  }

  
  .header__searchInput {
    height: 40px;
    padding: 10px;
    border: none;
    width:900px;
    

  }
  .header__search {
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;
  }
  .header__searchIcon {
    background-color:#febd69;
    padding: 20px;
    display: flex;
    height: 20px !important;
    justify-content: center;
    border-top: 10px;
  }
`;
const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <img className="header__logo" src="assets/logoWhite.png" ></img>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      
      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder='Search' /><p style={{backgroundColor:"#febd69",padding:"8px", marginTop:"17px"}}><FaSearch /> </p>
      </div>
      {/* <img className="header__sign" src="assets/sign-in.png" ></img> */}

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* <Nav.Item><Nav.Link href="/" className="header__searchIcon"><FaSearch/></Nav.Link></Nav.Item> */}
          <Nav.Item><Nav.Link href="/"><FaUserAlt/>Signin</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/"><FaShoppingCart/>Cart</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about"><FaHandsHelping/>Help</Nav.Link></Nav.Item>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default NavigationBar;