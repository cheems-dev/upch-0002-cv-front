import LogoImg from "@assets/img/logo.png";
import HomeIcon from "@components/icons/HomeIcon";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "routes/utils";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  return (
    <div className={`header`}>
      <nav className="navbar navbar-light navbar-expand-md bg-white justify-content-center">
        <div className="container">
          <a href="/" className="navbar-brand d-flex w-50 me-auto">
            <img src={LogoImg} />
          </a>

          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsingNavbar3"
            onClick={() => setOpenMobile(!openMobile)}
            aria-expanded={openMobile ? "true" : "false"}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`navbar-collapse collapse w-100${
              openMobile ? " show" : ""
            } `}
            id="collapsingNavbar3"
          >
            <ul className="nav navbar-nav justify-content-end ms-auto w-100  order-wrapper">
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="nav-item d-block d-sm-block d-md-none three me-3">
                <Link className="nav-link" to={ROUTES.private.home}>
                  <div className="d-inline-flex me-1 home-svg">
                    <HomeIcon />
                  </div>
                  Inicio
                </Link>
              </li>
              <li className="nav-item fourth notas-option me-3">
                <Link className="nav-link" to={ROUTES.private.cv}>
                  <i className="far fa-pencil fs-sm me-1 text-upch"></i>
                  Editar mi CV
                </Link>
              </li>
              <li className="nav-item d-block d-sm-block d-md-none fourth me-3">
                <Link className="nav-link fs-sm " to={ROUTES.private.people}>
                  {" "}
                  <i className="far fa-user fs-sm me-1 text-upch "></i>
                  Mi Equipo
                </Link>
              </li>

              <li className="nav-item d-block d-sm-block d-md-none fourth">
                <Link
                  className="nav-link logout fs-sm fourth border-top mt-2 me-3"
                  to={ROUTES.private.home}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                    <path d="M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                  </svg>
                  Cerrar sesión
                </Link>
              </li>

              <li className="nav-item dropdown d-flex profile-info one ">
                <div className="d-flex align-items-center">
                  <p>
                    Maria del Carmen Miniza Stoll <br />{" "}
                    <span className=" ">DIRECTOR DE DESARROLLO HUMANO</span>
                  </p>
                </div>
                <a
                  className={`nav-link dropdown-toggle toggle-profile pe-4${
                    open ? " show" : ""
                  }`}
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={open ? "true" : "false"}
                  onClick={() => setOpen(!open)}
                >
                  <div className="border border-2 border-bs-gray-200  crop crop-round-40">
                    {/*      <!-- <img src="../../assets/profile.png" alt="user" className="profile-pic"> --> */}
                    <span>MM</span>
                  </div>
                </a>

                <ul
                  className={`dropdown-menu dropdown-menu-right user-display${
                    open ? " show" : ""
                  }`}
                  aria-labelledby="navbarScrollingDropdown"
                  data-bs-popper={open ? "none" : ""}
                >
                  <li>
                    <a href="#" className="dropdown-item fs-sm ">
                      <i className="far fa-envelope me-2"></i>{" "}
                      maria.miniza@upch.pe
                    </a>
                  </li>
                  <li className="d-none">
                    <Link
                      className="dropdown-item fs-sm"
                      to={ROUTES.private.cv}
                    >
                      {" "}
                      <i className="far fa-user fs-sm me-2 "></i>
                      Mi Perfil
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item logout fs-sm"
                      to={ROUTES.private.home}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                      </svg>
                      Cerrar sesión
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
