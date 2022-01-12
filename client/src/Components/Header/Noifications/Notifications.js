import { faBell } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Item from "./Item/Item";
import classes from "./Notifications.module.css";

const Notifications = () => {
  return (
    <>
      <div className={classes.notification__body}>
        <Item
          title="Notification 1"
          active
          time={new Date().setTime("1641981426938")}
          icon={faBell}
          description="This is the description part of the notif is is is  ication"
        />
        <Item
          title="Notification 2"
          active
          time={new Date().setTime("1641981276938")}
          icon={faBell}
          description="This is the description part of the notif is is is  ication"
        />
        <Item
          title="Notification 3"
          time={new Date().setTime("1641981476938")}
          icon={faBell}
          description="This is the description of the Notification"
        />
      </div>
    </>
  );
};

export default Notifications;
