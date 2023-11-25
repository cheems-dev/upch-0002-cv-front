import React, { Children } from "react";

interface Props {
  id: string;
  title: string;
  icon: React.ReactNode;
  show: boolean;
  onClose: () => void;
  children: React.ReactNode | React.ReactNode[];
}

const CustomModal: React.FC<Props> = (props) => {
  const { title, icon, show, onClose, children, id, ...rest } = props;

  const elements = Children.toArray(children);

  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      tabIndex={-1}
      aria-hidden={!show}
      id={id}
      style={{ display: show ? "block" : "none" }}
      aria-modal={show ? "true" : undefined}
      role="dialog"
      {...rest}
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            {/* Mantenemos la sección de "modal-header" proporcionada */}
            <h6 className="modal-title" id="nuevaEducacionLabel">
              {icon}
              {title}
            </h6>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body px-4">
            {/* Contenido del cuerpo del modal, puedes agregar más contenido o personalizar según sea necesario */}
            {elements[0]}
          </div>

          <div className="modal-footer text-center">
            <div className="d-flex justify-content-between w-100">
              {elements[1]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
