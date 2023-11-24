import React, { ReactNode, useState } from "react";

interface Props {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
  titleModal?: string;
  modalBody?: ReactNode;
  modalFooter?: ReactNode;
  idButton?: string;
  actions?: boolean;
}

const Accordion: React.FC<Props> = (props) => {
  const { title, icon, children, id, idButton } = props;
  const { titleModal, modalBody, modalFooter, actions = true } = props;

  const [open, setOpen] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="accordion-item mt-3 mb-3" id={id}>
        <h2 className="accordion-header">
          <a
            className={`accordion-button fw-medium text-decoration-none${
              open ? "" : " collapsed"
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            aria-expanded={open ? "true" : "false"}
            aria-controls={id}
            onClick={() => setOpen(!open)}
          >
            <div className="d-flex justify-content-between align-items-center w-100">
              <div className="d-flex justify-content-start">
                <div className="d-flex align-items-center">
                  {icon}
                  <span className="ms-1 fw-medium">{title}</span>
                </div>
              </div>
              {actions && (
                <div className="flex-end me-3">
                  <button
                    className="btn btn-sm btn-outline-secondary me-3"
                    data-bs-toggle="modal"
                    data-bs-target={`#${idButton}`}
                    onClick={() => setOpenModal(!openModal)}
                  >
                    <i className="bi bi-plus-circle text-upch me-1"></i>
                    Nuevo
                  </button>
                </div>
              )}
            </div>
          </a>
        </h2>
        <div
          id={title.replace(/\s+/g, "-")}
          className={`accordion-collapse collapse${open ? " show" : ""}`}
        >
          <div className="accordion-body">{children}</div>
        </div>
      </div>

      {titleModal && modalBody && modalFooter && (
        <div
          className={`modal fade ${openModal ? "show" : ""}`}
          tabIndex={-1}
          aria-hidden={!openModal}
          id={idButton}
          style={{ display: openModal ? "block" : "none" }}
          role="dialog"
          aria-labelledby={`${idButton}Label`}
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h6 className="modal-title" id={`${idButton}Label`}>
                  {icon}
                  {` ${titleModal}`}
                </h6>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setOpenModal(!openModal)}
                ></button>
              </div>
              <div className="modal-body px-4">{modalBody}</div>

              <div className="modal-footer text-center">
                <div className="d-flex justify-content-between w-100 gap-1">
                  {modalFooter}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Accordion;
