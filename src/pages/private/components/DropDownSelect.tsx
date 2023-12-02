import React from "react";
import { Dropdown, Form } from "react-bootstrap";
import "./DropDownSelect.scss";

interface Option {
  name: string;
  value: string;
}

interface Props {
  label: string;
  select: Option;
  options: Option[];
  onSelect: (eventKey: Option) => void;
}

const DropDownSelect: React.FC<Props> = (props) => {
  const { label, select, options, onSelect } = props;

  return (
    <Form.Group className="form-group">
      <Form.Label className="mb-1 fw-regular">{label}</Form.Label>
      <Dropdown
        className="dropdown js-bs-select-dropdown selectPortal"
        onSelect={(eventKey) => {
          const numericKey = parseInt(eventKey as string, 10);
          if (!Number.isNaN(numericKey)) {
            onSelect(options[numericKey]);
          }
        }}
      >
        <Dropdown.Toggle
          variant=""
          className="d-flex flex-nowrap align-items-center justify-content-between form-select form-select-sm single-select select-bs"
        >
          <div>{select?.name}</div>
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{
            position: "absolute",
            transform: "translate(0px, 34px)",
          }}
          className="w-100 mt-1"
        >
          <Form.Group className="px-2 pb-2 border-bottom">
            <div className="d-flex justify-content-end align-items-center">
              <Form.Control type="search" size="sm" placeholder="Buscar.." />
            </div>
          </Form.Group>
          {options.map((option, index) => (
            <Dropdown.Item
              key={index}
              eventKey={index}
              className={`dropdown-item align-items-end ${
                select.value === option.value ? "active" : ""
              }`}
            >
              <span>{option.name}</span>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Form.Group>
  );
};

export default DropDownSelect;
