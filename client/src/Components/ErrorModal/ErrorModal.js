import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const [show, setShow] = useState(props.show);

  const handleClose = () => {
    setShow(false);
    props.setShowModal(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={classes.ErrorModal__container}
    >
      <Modal.Header closeButton className={classes.errorHeader_container}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title.split(":").splice(0, 1).join(" ")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.title.split(":").splice(1, 1).join(" ")}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => handleClose()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
