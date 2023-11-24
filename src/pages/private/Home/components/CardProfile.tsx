import Avatar from "@assets/img/avatar-neutro.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "routes/utils";

const CardProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 card-inicio">
      <div className="card card-profile shadow-sm mt-4">
        <div className="card-body">
          <div className="profile-info text-center">
            <img
              src={Avatar}
              className="rounded-circle border border-white shadow-sm my-3"
              style={{ width: "100px", height: "100px" }}
              alt="User Avatar"
            />
            <h5 className="fw-bold mb-2">Maria del Carmen, Miniza Stoll</h5>
            <span className="text-uppercase badge-cargo mb-2">
              DIRECTOR DE DESARROLLO HUMANO
            </span>
            <div className="w-100 border-top mt-4 pt-3"></div>
            <div className="d-flex justify-content-between flex-wrap mx-auto px-4 text-center">
              <p className="text-uppercase mb-2 w-25 text-start">
                <span className="text-upch me-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-vcard"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z" />
                  </svg>
                </span>
                09644380
              </p>
              <p className="mb-0 w-75 text-start ps-3">
                <i className="bi bi-people-fill text-upch me-1"></i> Dirección
                de desarrollo humano
              </p>
              <p className="mb-0 w-25 text-start">
                <i className="bi bi-telephone text-upch me-1"></i> 935 115 668
              </p>
              <p className="mb-0 w-75 text-start ps-3">
                <i className="bi bi-envelope text-upch me-1"></i>{" "}
                maria.miniza@upch.pe
              </p>
              <p className="mb-0 w-100 text-start mt-2">
                <i className="bi bi-geo-alt text-upch me-1"></i>Jr. Alfonso
                Ugarte 376, San Martín de Porres 15102
              </p>
            </div>
            <div className="mt-3 py-3">
              <button
                className="btn btn-sm btn-primary px-4"
                onClick={() => navigate(ROUTES.private.viewCV)}
              >
                <span className="px-2">Ver mi CV</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
