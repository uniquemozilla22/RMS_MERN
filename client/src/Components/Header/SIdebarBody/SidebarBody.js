import { faFile, faThLarge } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container } from "react-bootstrap";
import Avatar from "./Avatar/Avatar";
import userProfile from "./modal.jpg";
import NavigationLink from "./NavLink/NavLink";
import classes from "./SidebarBody.module.css";

const SidebarBody = () => {
  return (
    <Container>
      <Avatar
        name={"Yogesh Bhattarai"}
        image={userProfile}
        title={"Web Developer"}
      />

      <div className={classes.nav__link__cotainer}>
        <NavigationLink icon={faThLarge} title={"Dashboard"} to="./" />
        <NavigationLink icon={faFile} title={"Reports"} to="./reports" />
        <NavigationLink icon={faThLarge} title={"Dashboard"} to="./x" />
        <NavigationLink icon={faThLarge} title={"Dashboard"} to="./y" />
        <NavigationLink icon={faThLarge} title={"Dashboard"} to="./z" />
        <NavigationLink icon={faThLarge} title={"Dashboard"} to="./x" />
        <NavigationLink icon={faThLarge} title={"Dashboard"} to="./y" />
        <NavigationLink icon={faThLarge} title={"Dashboard"} to="./e" />
        <NavigationLink icon={faThLarge} title={"Dashboard"} to="./zr" />
      </div>
    </Container>
  );
};

export default SidebarBody;
