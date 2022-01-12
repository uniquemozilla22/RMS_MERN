import React from "react";
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
