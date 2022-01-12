import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Overlay, OverlayTrigger, Tooltip } from "react-bootstrap";
import classes from "./Items.module.css";

const Item = ({ title, active, time, icon, description }) => {
  const [isActive, setIsActive] = useState(active);

  const diffDays = Math.floor((new Date() - new Date(time)) / 86400000); // days
  const diffHrs = Math.floor(
    ((new Date() - new Date(time)) % 86400000) / 3600000
  ); // hours
  const diffMins = Math.round(
    (((new Date() - new Date(time)) % 86400000) % 3600000) / 60000
  ); // minutes

  const handleActive = () => setIsActive(false);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <>
      <div
        className={
          classes.notification__container +
          " " +
          (isActive ? classes.notification__active : "")
        }
      >
        <div className={classes.icon}>
          <FontAwesomeIcon icon={icon} size="lg"></FontAwesomeIcon>
        </div>
        <div className={classes.content__wrapper}>
          <div className={classes.title}>
            {title}

            {isActive ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className={classes.mark_as_read}
                onClick={() => handleActive()}
              />
            ) : null}
          </div>
          <div className={classes.description}>{description}</div>
          <div className={classes.date__container}>
            {diffDays !== 0 ? diffDays + " d " : null}
            {diffHrs !== 0 ? diffHrs + " h " : null}
            {diffMins !== 0 ? diffMins + " m " : null}
            ago
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
