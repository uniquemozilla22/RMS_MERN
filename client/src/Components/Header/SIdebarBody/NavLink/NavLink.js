import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./NavLink.module.css";

const NavigationLink = ({ title, to, icon }) => {
  return (
    <div className={classes.navLink}>
      <NavLink
        to={to}
        className={(navData) =>
          navData.isActive ? classes.active__navigation : ""
        }
      >
        {title}
        <FontAwesomeIcon icon={icon} size="lg" />
      </NavLink>
    </div>
  );
};

export default NavigationLink;
