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
import Notifications from "./Noifications/Notifications";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showBellSidebar, setShowBellSidebar] = useState(true);

  const handleSidebarClose = () => setShowSidebar(false);
  const handleSidebarShow = () => setShowSidebar(true);

  const handleBellClose = () => setShowBellSidebar(false);
  const handleBellShow = () => setShowBellSidebar(true);

  return (
    <>
      <Navbar expand="lg" variant="white" className={classes.header__container}>
        <Container fluid>
          <Nav>
            <Nav.Link onClick={handleSidebarShow}>
              <FontAwesomeIcon icon={faBars} size="lg" />
            </Nav.Link>
            <Navbar.Brand className={classes.header__brand}>RMS</Navbar.Brand>
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
            <Nav.Link onClick={handleBellShow}>
              <FontAwesomeIcon icon={faBell} size="lg" />
            </Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon icon={faUserCircle} size="lg" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas
        show={showSidebar}
        onHide={handleSidebarClose}
        className={classes.sidebar__container}
        variant="dark"
      >
        <Offcanvas.Header className={classes.sidebar__header}>
          <Offcanvas.Title className={classes.sidebar__title}>
            RMS
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={classes.sidebar__body}>
          <SidebarBody />
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas
        show={showBellSidebar}
        onHide={handleBellClose}
        className={classes.sidebar__container}
        variant="dark"
        placement={"end"}
      >
        <Offcanvas.Header className={classes.sidebar__header}>
          <Offcanvas.Title className={classes.sidebar__title}>
            Notifications
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={classes.sidebar__body}>
          <Notifications />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
