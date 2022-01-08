import React from "react";
import { Dropdown, DropdownButton, NavDropdown } from "react-bootstrap";
import classes from "./Option.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faSignOutAlt,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

const Option = () => {
  const navigation = useNavigate();
  const logout = (e) => {
    Cookies.remove("token");
    navigation("/login");
  };
  return (
    <div className={classes.dropdown__info}>
      <NavDropdown
        id="nav-dropdown-dark-example"
        title={<FontAwesomeIcon icon={faCaretDown} size="lg" />}
        menuVariant="light"
      >
        <NavigationItem
          title="View Profile"
          onClickFunction={() => console.log("View Profile")}
          icon={faUserTag}
          classes={classes}
        />
        <NavigationItem
          title="Logout"
          onClickFunction={logout}
          icon={faSignOutAlt}
          classes={classes}
        />
      </NavDropdown>
    </div>
  );
};

const NavigationItem = ({ title, onClickFunction, icon, classes }) => {
  return (
    <NavDropdown.Item>
      <div className={classes.navLink} onClick={(e) => onClickFunction(e)}>
        <div className={classes.item__title}>
          <FontAwesomeIcon icon={icon} />
          {title}
        </div>
      </div>
    </NavDropdown.Item>
  );
};

export default Option;
