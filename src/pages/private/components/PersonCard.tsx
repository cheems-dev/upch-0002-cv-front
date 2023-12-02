import React, { useId } from "react";

interface Props {
  name: string;
  image: string;
  teams: string[];
  job: string;
}

const PersonCard: React.FC<Props> = (props) => {
  const { name, image, teams, job } = props;

  const id = useId();

  return (
    <div className="col-sm-12 col-md-4 mb-2">
      <div className="card shadow-sm">
        <div className="card-header border-0">
          <div className="d-flex align-items-center border-bottom pt-2 pb-3">
            <div>
              <img
                className="rounded-circle border border-white shadow-sm ms-1 rounded-persona-img"
                src={image}
                alt={`${name}'s profile`}
              />
            </div>
            <div className="ps-3">
              <h5 className="mb-0">{name}</h5>
              <span className="cargo-subtitle">
                <i className="bi bi-file-person me-1 text-upch lh-1" />
                {job}
              </span>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="info-description mb-3">
            <div className="d-flex">
              <p className="fw-medium">
                <i className="bi bi-people-fill me-1 text-upch" /> Equipos:{" "}
                {teams.map((team, index) => (
                  <span
                    key={`${id}-${index}`}
                    className="bg-light text-dark fw-regular rounded-3 ms-2 py-1 px-2"
                  >
                    {team}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="buttons-item mb-3">
            <div className="d-flex mx-auto">
              <button
                type="button"
                className="btn btn-sm btn-outline-danger px-4 me-3"
              >
                {" "}
                <i className="bi bi-envelope pe-1" /> Enviar correo
              </button>
              <button
                type="button"
                className="btn btn-sm btn-primary px-4 w-50"
              >
                Ver CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
