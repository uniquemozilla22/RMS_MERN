import { faCaretDown, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Dropdown, DropdownButton, NavDropdown } from "react-bootstrap";
import NavigationLink from "../NavLink/NavLink";
import classes from "./Avatar.module.css";
import Option from "./DropDown/Option";

const Avatar = ({ name, image, title }) => {
  return (
    <>
      <div className={classes.avatar__container}>
        <img src={image} alt={name} />
        <div className={classes.avatar__content}>
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
        <Option />
      </div>
    </>
  );
};

export default Avatar;
