import React from "react";

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
    <div
      className={`modal fade ${show ? "show" : ""}`}
      tabIndex={-1}
      aria-hidden={!show}
      id={idButton}
      style={{ display: show ? "block" : "none" }}
      role="dialog"
      aria-labelledby={`${idButton}Label`}
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title" id={`${idButton}Label`}>
              {icon}
              {` ${title}`}
            </h6>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body px-4">{modalBody}</div>

          <div className="modal-footer text-center">
            <div className="d-flex justify-content-between w-100">
              {modalFooter}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
