import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faSignOutAlt,
  faUserAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import SidebarBody from "./SIdebarBody/SidebarBody";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg" variant="white" className={classes.header__container}>
        <Container fluid>
          <Nav>
            <Nav.Link onClick={handleShow}>
              <FontAwesomeIcon icon={faBars} size="lg" />
            </Nav.Link>
            <Navbar.Brand href="#home" className={classes.header__brand}>
              RMS
            </Navbar.Brand>
          </Nav>
          <Nav
            className={classes.header__searchbar + " justify-content-center"}
          >
            <Form.Control
              type="text"
              id="search"
              placeholder="Search"
              variant="dark"
              size="md"
            />
          </Nav>
          <Nav className={classes.header_icons}>
            <Nav.Link>
              <FontAwesomeIcon icon={faBell} size="lg" />
            </Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon icon={faUserCircle} size="lg" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>RMS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ overflowY: "unset" }}>
          <SidebarBody />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
