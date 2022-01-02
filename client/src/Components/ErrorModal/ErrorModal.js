import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const ErrorModal = (props) => {
  return (
    <Modal toggle={function noRefCheck() {}}>
      <ModalHeader toggle={function noRefCheck() {}}>
        {props.title.split(" ")[1 ]}
      </ModalHeader>
      <ModalBody>{props.title}</ModalBody>
      <ModalFooter>
        <Button onClick={function noRefCheck() {}}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ErrorModal;
