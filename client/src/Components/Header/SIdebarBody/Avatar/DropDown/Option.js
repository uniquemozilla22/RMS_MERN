import React, { useState } from "react";
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
import { connect } from "react-redux";
import LogoutAction from "../../../../../Redux/Action/LogoutAction";

const Option = (props) => {
  const navigation = useNavigate();

  const logout = (e) => {
    props.Logout();
    Cookies.remove("token");
    navigation("/login");
  };

  return (
    <div className={classes.dropdown__info}>
      <NavDropdown
        id="nav-dropdown-dark-example"
        title={<FontAwesomeIcon icon={faCaretDown} size="lg" />}
        menuVariant="dark"
        align="end"
      >
        <NavigationItem
          title="View Profile"
          onClickFunction={() => console.log("View Profile")}
          icon={faUserTag}
          classes={classes}
          {...props}
        />
        <NavigationItem
          title="Logout"
          onClickFunction={(e) => logout(e)}
          icon={faSignOutAlt}
          classes={classes}
          {...props}
        />
      </NavDropdown>
    </div>
  );
};

const NavigationItem = (props) => {
  return (
    <NavDropdown.Item onClick={(e) => props.onClickFunction(e)}>
      <div className={props.classes.navLink}>
        <div className={props.classes.item__title}>
          <FontAwesomeIcon icon={props.icon} />
          {props.title}
        </div>
      </div>
    </NavDropdown.Item>
  );
};

const mapStateToProps = (state, ownprops) => {
  return { ...state, ownprops };
};

const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    ...ownprops,
    Logout: () => dispatch(LogoutAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Option);
