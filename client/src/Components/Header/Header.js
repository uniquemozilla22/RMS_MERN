import React from "react";
import { Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        className={classes.header__container}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav>
            <Navbar.Brand href="#home">RMS</Navbar.Brand>
          </Nav>
          <Nav
            className={classes.header__searchbar + " justify-content-center"}
          >
            <Form.Control
              type="text"
              id="search"
              placeholder="Search"
              variant="dark"
            />
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link href="/login">
              <FontAwesomeIcon icon={faSignOutAlt} size="25" />
            </Nav.Link>
            <NavDropdown title="Profile" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="./home"> SomeThing</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
