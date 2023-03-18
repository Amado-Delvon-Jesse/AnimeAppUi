import React from 'react';
import '../styles/App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';



function NavBar() {

  return (
    <>
      <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Osusume</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
                Home   
            </Nav.Link>
            <Nav.Link as={Link} to="/topAnime">
                Top Anime
            </Nav.Link>
            <Nav.Link as={Link} to="/topManga">
                Top Manga
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
  );
}

export default NavBar;
