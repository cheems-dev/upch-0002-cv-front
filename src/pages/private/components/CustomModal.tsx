import React from "react";
import { Modal } from "react-bootstrap";

interface Props {
  show: boolean;
  icon: React.ReactNode;
  title: string;
  idButton: string;
  modalBody: React.ReactNode;
  modalFooter: React.ReactNode;
  onClose: () => void;
}

const CustomModal: React.FC<Props> = (props) => {
  const { icon, title, modalBody, modalFooter, idButton } = props;
  const { show, onClose } = props;

  return (
    <Modal
      show={show}
      backdropClassName="modalGenerateCode"
      backdrop="static"
      keyboard={false}
      centered
      size="xl"
      aria-labelledby={`${idButton}Label`}
    >
      <Modal.Header closeButton onClick={onClose}>
        <Modal.Title>
          <h6 className="modal-title" id={`${idButton}Label`}>
            {icon}
            {` ${title}`}
          </h6>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="px-4">{modalBody}</Modal.Body>
      <Modal.Footer className="px-4 border-0">{modalFooter}</Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
