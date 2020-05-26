import React from "react";
import Modal from "react-bootstrap/Modal";
import NewEmployeeForm from "./NewEmployeeForm/NewEmployeeForm";

function AddEmployeeButton() {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="app-add-employee-button btn btn-primary"
        onClick={showModal}
      >
        Add Employee
      </button>

      <Modal animation={false} show={isOpen} onHide={hideModal}>
        <NewEmployeeForm hideModal={hideModal} />
      </Modal>
    </>
  );
}

export default AddEmployeeButton;
