import { CSSProperties, useState } from "react";
import { Accordion, Layout, ProfileCard } from "../components";
import imgLogo from "@assets/img/profile.png";
import imgLogoUpchRojo from "@assets/img/logo_upchrojo.png";
import imgLogoUsil from "@assets/img/logo_usil.png";
import imgLogoIdkn from "@assets/img/logo_lkdn.png";
import {
  BadgeIcon,
  BarChartIcon,
  EducationIcon,
  LoadingIcon,
  WorkIcon,
  WorldIcon,
} from "@components/index";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const containerStyles = {
  maxWidth: "98%",
};

const imgStyles: CSSProperties = {
  objectFit: "contain",
};

const Cv = () => {
  /* TODO: cambia el useState para los diferentes dataPicker */
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Layout>
      <div>
        <ProfileCard
          image={imgLogo}
          name="Hector Cantaro Segura"
          job="Coordinador academico"
          teams="Ecosistema académico"
          dni="79466450"
          email="hector.segura@gmail.com"
          phone="+51 963 113 582"
          address="  Jr. Alfonso Ugarte 376, San Martín de Porres 15102"
          edit={true}
        />

        <div className="container" style={containerStyles}>
          <div className="row">
            <div className="col-sm-12 col-12">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {/* Nueva experiencia */}
                <Accordion
                  id="flush-collapseOne"
                  idButton="nuevaExperiencia"
                  title="Experiencia"
                  icon={<WorkIcon />}
                  titleModal="Nueva Experiencia laboral"
                  modalBody={
                    <>
                      <div className="row">
                        <div className="col-sm-12 col-12">
                          <h6 className="fw-medium">Datos de la experiencia</h6>
                        </div>
                      </div>
                      <div className="border rounded-3 p-4">
                        <div className="row">
                          <div className="col-sm-12 col-md-6 mb-3">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Nombre del cargo*
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                              />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 mb-3">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Empresa*
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                              />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-3 mb-3">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Fecha inicio*:
                              </label>
                              <div
                                className="input-group input-group-sm date mb-2"
                                id="datepicker"
                              >
                                <DatePicker
                                  showIcon
                                  selected={startDate}
                                  onChange={(date: Date) => setStartDate(date)}
                                  className="form-control form-control-sm"
                                  icon={
                                    <svg
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g
                                        id="SVGRepo_bgCarrier"
                                        stroke-width="0"
                                      ></g>
                                      <g
                                        id="SVGRepo_tracerCarrier"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></g>
                                      <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                          d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                          stroke="#464c4d"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        ></path>{" "}
                                      </g>
                                    </svg>
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-3 mb-3">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Fecha finalización*:
                              </label>
                              <div
                                className="input-group input-group-sm date mb-2"
                                id="datepicker2"
                              >
                                <DatePicker
                                  showIcon
                                  selected={startDate}
                                  onChange={(date: Date) => setStartDate(date)}
                                  className="form-control form-control-sm"
                                  icon={
                                    <svg
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g
                                        id="SVGRepo_bgCarrier"
                                        stroke-width="0"
                                      ></g>
                                      <g
                                        id="SVGRepo_tracerCarrier"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></g>
                                      <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                          d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                          stroke="#464c4d"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        ></path>{" "}
                                      </g>
                                    </svg>
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6  mb-3">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Actividad de la empresa*:
                              </label>
                              <select className="form-select form-select-sm single-select select-bs">
                                <option value="1">Educación</option>
                                <option value="2">Otro</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-flex">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="flexSwitchCheckChecked"
                                />
                              </div>
                              <label
                                className="form-check-label fw-regular fs-12 mb-2 "
                                htmlFor="flexSwitchCheckChecked "
                              >
                                {" "}
                                Actualmente tengo este cargo
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-5">
                        <div className="col-12">
                          <h6 className="fw-medium">
                            Descripción de la experiencia
                          </h6>
                        </div>
                      </div>
                      <div className="border rounded-3 p-4">
                        <div className="row">
                          <div className="col-sm-12 col-md-12 mb-3">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Descripción de funciones*
                              </label>
                              <textarea
                                id="motivotext"
                                name="motivotext"
                                className="form-control form-control-sm"
                                rows={3}
                                cols={50}
                                defaultValue={"Ingresar descripción"}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-12 mb-3">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Descripción de logros*
                              </label>
                              <textarea
                                id="motivotext"
                                name="motivotext"
                                className="form-control form-control-sm"
                                rows={3}
                                cols={50}
                                defaultValue={"Ingresar descripción"}
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-sm-12 col-md-12 mb-3">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Aptitudes
                              </label>
                              <input
                                name="tags-outside-2"
                                className="tagify--outside form-control-sm form-control"
                                placeholder="Escribe tu aptitud"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  }
                  modalFooter={
                    <div className="d-flex justify-content-between w-100">
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm text-center px-4"
                        data-bs-dismiss="modal"
                      >
                        <i className="bi bi-trash3 me-1"></i>Eliminar
                        experiencia
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm text-center px-4"
                        data-bs-dismiss="modal"
                      >
                        Guardar cambios
                      </button>
                    </div>
                  }
                >
                  <div className="d-flex flex-wrap w-100 justify-content-start pe-3 border-bottom py-4 mb-3">
                    <div className="d-flex align-items-start me-3">
                      <img src={imgLogoUpchRojo} style={imgStyles} />
                    </div>
                    <div className="title-width ">
                      <h5 className="fw-medium">
                        Universidad Peruana Cayetano Heredia
                      </h5>
                      <small className=" label-years">
                        Enero 2021 - Julio 2022
                      </small>
                    </div>
                    <div className="">
                      <button className="btn btn-sm btn-opciones me-3">
                        <i className="bi bi-pencil text-upch me-1"></i>
                        Editar
                      </button>
                    </div>
                    <div className="w-100">
                      <ul className="marker ">
                        <li className="marker-item-border mt-3">
                          <h5>Coordinador académico</h5>
                          <div>
                            <span className="text-gray">
                              Enero 2021 - Julio 2022
                            </span>
                            <p className="mt-2 fw-regular">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                            <div className="d-flex align-items-center mt-1 pb-3 flex-wrap">
                              <p className="fw-medium mb-0">Aptitudes:</p>
                              <span className="bg-light text-dark fw-regular rounded-3 ms-2 py-1 px-2">
                                MS Excel
                              </span>{" "}
                              <span className="bg-light text-dark fw-regular rounded-3 ms-2 py-1 px-2">
                                MS Word
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="marker-item mt-3">
                          <h5>Docente</h5>

                          <div>
                            <span className="text-gray">
                              Enero 2021 - Julio 2022
                            </span>
                            <p className="mt-2 fw-regular">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                            <div className="d-flex align-items-center mt-1 flex-wrap">
                              <p className="fw-medium mb-0">Aptitudes:</p>
                              <span className="bg-light text-dark fw-regular rounded-3 ms-2 py-1 px-2">
                                MS Excel
                              </span>{" "}
                              <span className="bg-light text-dark fw-regular rounded-3 ms-2 py-1 px-2">
                                MS Word
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap w-100 justify-content-start pe-3  py-4 mb-3">
                    <div className="d-flex align-items-start me-3">
                      <img src={imgLogoUsil} style={imgStyles} />
                    </div>
                    <div className="title-width">
                      <h5 className="fw-medium">Docente</h5>
                      <h6 className="fw-regular">
                        Universidad Nacional Mayor de San Marcos
                      </h6>
                      <span className=" label-years">
                        Enero 2021 - Julio 2022
                      </span>
                      <p className="mt-2 fw-regular">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <div className="d-flex align-items-center mt-1 flex-wrap">
                        <p className="fw-medium mb-0">Aptitudes:</p>
                        <span className="bg-light text-dark fw-regular rounded-3 ms-2 py-1 px-2">
                          MS Excel
                        </span>{" "}
                        <span className="bg-light text-dark fw-regular rounded-3 ms-2 py-1 px-2">
                          MS Word
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <button className="btn btn-sm btn-opciones me-3">
                        <i className="bi bi-pencil text-upch me-1"></i>
                        Editar
                      </button>
                    </div>
                  </div>
                </Accordion>

                <Accordion
                  id="flush-headingTwo"
                  idButton="nuevaEducacion"
                  title="Educación"
                  icon={<EducationIcon />}
                  titleModal="Nueva Educación"
                  modalBody={
                    <>
                      <div className="row">
                        <div className="col-12">
                          <h6 className="fw-medium">Datos de la formación</h6>
                        </div>
                      </div>
                      <div className="border rounded-3 p-4">
                        <div className="row">
                          <div className="col-sm-12 col-md-6  mb-4">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Formación Académica*:
                              </label>
                              <select className="form-select form-select-sm single-select select-bs">
                                <option value="1">Maestría</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6  mb-4">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Disciplina académica*:
                              </label>
                              <select className="form-select form-select-sm single-select select-bs">
                                <option value="1">Educación</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6  mb-4">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                País de formación*:
                              </label>
                              <select className="form-select form-select-sm single-select select-bs">
                                <option value="1">Perú</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6  mb-4">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Institución*:
                              </label>
                              <select className="form-select form-select-sm single-select select-bs">
                                <option value="1">
                                  Universidad Peruana Cayetano Heredia
                                </option>
                                <option value="2">Otro</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 mb-2">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Fecha inicio*:
                              </label>
                              <div
                                className="input-group input-group-sm date mb-2"
                                id="datepicker"
                              >
                                <DatePicker
                                  showIcon
                                  selected={startDate}
                                  onChange={(date: Date) => setStartDate(date)}
                                  className="form-control form-control-sm"
                                  icon={
                                    <svg
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g
                                        id="SVGRepo_bgCarrier"
                                        stroke-width="0"
                                      ></g>
                                      <g
                                        id="SVGRepo_tracerCarrier"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></g>
                                      <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                          d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                          stroke="#464c4d"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        ></path>{" "}
                                      </g>
                                    </svg>
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 mb-2">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Fecha de finalización*:
                              </label>
                              <div
                                className="input-group input-group-sm date mb-2"
                                id="datepicker2"
                              >
                                <DatePicker
                                  showIcon
                                  selected={startDate}
                                  onChange={(date: Date) => setStartDate(date)}
                                  className="form-control form-control-sm"
                                  icon={
                                    <svg
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g
                                        id="SVGRepo_bgCarrier"
                                        stroke-width="0"
                                      ></g>
                                      <g
                                        id="SVGRepo_tracerCarrier"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></g>
                                      <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                          d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                          stroke="#464c4d"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        ></path>{" "}
                                      </g>
                                    </svg>
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  }
                  modalFooter={
                    <div className="d-flex justify-content-between w-100">
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm text-center px-4"
                        data-bs-dismiss="modal"
                      >
                        <i className="bi bi-trash3 me-1"></i>Eliminar formación
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm text-center px-4"
                        data-bs-dismiss="modal"
                      >
                        Guardar cambios
                      </button>
                    </div>
                  }
                >
                  <div className="d-flex flex-wrap w-100 justify-content-start pe-3 border-bottom py-4 mb-3">
                    <div className="d-flex align-items-start me-3">
                      <img src={imgLogoUpchRojo} style={imgStyles} />
                    </div>
                    <div className="title-width">
                      <h5 className="fw-medium">
                        Universidad Peruana Cayetano Heredia
                      </h5>
                      <h6 className="fw-regular">
                        Maestría en Educación y Pedagogía
                      </h6>
                      <small className=" label-years">2006 - 2010 </small>
                      <p className="mt-2 fw-regular">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div className="">
                      <button className="btn btn-sm btn-opciones me-3">
                        <i className="bi bi-pencil text-upch me-1"></i>
                        Editar
                      </button>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap w-100 justify-content-start pe-3  py-4 mb-3">
                    <div className="d-flex align-items-start me-3">
                      <img src={imgLogoUsil} style={imgStyles} />
                    </div>
                    <div className="title-width">
                      <h5 className="fw-medium">
                        Universidad Nacional Mayor de San Marcos
                      </h5>
                      <h6 className="fw-regular">Educación y Pedagogía</h6>
                      <small className=" label-years">2001 - 2006 </small>
                      <p className="mt-2 fw-regular">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div className="">
                      <button className="btn btn-sm btn-opciones me-3">
                        <i className="bi bi-pencil text-upch me-1"></i>
                        Editar
                      </button>
                    </div>
                  </div>
                </Accordion>

                <Accordion
                  id="flush-headingThree"
                  idButton="nuevaCertificacion"
                  title="Certificaciones, Diplomados y otros."
                  icon={<BadgeIcon />}
                  titleModal="Datos de la certificación, diplomado y/o otros"
                  modalBody={
                    <>
                      <div className="row">
                        <div className="col-sm-12 col-md-6  mb-4">
                          <div className="form-group">
                            <label className="mb-1 fw-regular">Nombre*:</label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                            />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6  mb-4">
                          <div className="form-group">
                            <label className="mb-1 fw-regular">
                              Institución*:
                            </label>
                            <select className="form-select form-select-sm single-select select-bs">
                              <option value="1">Lindkedin</option>
                              <option value="2">Otro</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6  mb-4">
                          <div className="form-group">
                            <label className="mb-1 fw-regular">Tipo*:</label>
                            <select className="form-select form-select-sm single-select select-bs">
                              <option value="1">Certificación</option>
                              <option value="2">Diplomado</option>
                              <option value="3">Curso</option>

                              <option value="4">Otro</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6  mb-4">
                          <div className="form-group">
                            <label className="mb-1 fw-regular">
                              Año de formación*:
                            </label>
                            <select className="form-select form-select-sm single-select select-bs">
                              <option value="1">2020</option>
                              <option value="2">2021</option>
                              <option value="3">2022</option>
                              <option value="4">2023</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 mb-3">
                          <div className="form-group">
                            <label className="mb-1 fw-regular">Aptitudes</label>
                            <input
                              name="tags-outside-3"
                              placeholder="Escribe tus aptitudes"
                              className="form-control-sm form-control tagify--outside"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  }
                  modalFooter={
                    <>
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm text-center px-4"
                        data-bs-dismiss="modal"
                      >
                        <i className="bi bi-trash3 me-1"></i>Eliminar
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm text-center px-4"
                        data-bs-dismiss="modal"
                      >
                        Guardar cambios
                      </button>
                    </>
                  }
                >
                  <div className="d-flex flex-wrap w-100 justify-content-start pe-3 border-bottom py-4 mb-3">
                    <div className="d-flex align-items-start me-3">
                      <img src={imgLogoIdkn} style={imgStyles} />
                    </div>
                    <div className="title-width">
                      <h5 className="fw-medium">
                        Fundamentos de la comunicación
                      </h5>
                      <h6 className="fw-regular">Linkedin</h6>
                      <small className=" label-years">
                        Expedición: Abr. 2022
                      </small>

                      <div className="d-flex align-items-center mt-3 flex-wrap">
                        <p className="fw-medium mb-0">Aptitudes:</p>
                        <span className="bg-light text-dark fw-regular rounded-3 ms-2 py-1 px-2">
                          Comunicación
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <button className="btn btn-sm btn-opciones me-3">
                        <i className="bi bi-pencil text-upch me-1"></i>
                        Editar
                      </button>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap w-100 justify-content-start pe-3  py-4 mb-3">
                    <div className="d-flex align-items-start me-3">
                      <img src={imgLogoIdkn} style={imgStyles} />
                    </div>
                    <div className="title-width">
                      <h5 className="fw-medium">
                        Desarrollo de equipos de alto rendimiento
                      </h5>
                      <h6 className="fw-regular">Linkedin</h6>
                      <small className=" label-years">
                        Expedición: Ene. 2022
                      </small>

                      <div className="d-flex align-items-center mt-3 flex-wrap">
                        <p className="fw-medium mb-0">Aptitudes:</p>
                        <span className="bg-light text-dark fw-regular rounded-3 ms-2 py-1 px-2">
                          Desarrollo de equipos
                        </span>{" "}
                        <span className="bg-light text-dark fw-regular rounded-3 ms-2 py-1 px-2">
                          Liderazgo
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <button className="btn btn-sm btn-opciones me-3">
                        <i className="bi bi-pencil text-upch me-1"></i>
                        Editar
                      </button>
                    </div>
                  </div>
                </Accordion>
                <Accordion
                  title="Idiomas"
                  id="flush-headingFour"
                  idButton="nuevoIdioma"
                  icon={<WorldIcon />}
                  titleModal="Nueva Idioma"
                  modalBody={
                    <>
                      <div className="row">
                        <div className="col-12">
                          <h6 className="fw-medium">Datos del idioma</h6>
                        </div>
                      </div>
                      <div className="border rounded-3 p-4">
                        <div className="row">
                          <div className="col-sm-12 col-md-6  mb-4">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Idioma*:
                              </label>
                              <select className="form-select form-select-sm single-select select-bs">
                                <option value="1">Inglés</option>
                                <option value="2">Otro</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6  mb-4">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Nivel de escritura*:
                              </label>
                              <select className="form-select form-select-sm single-select select-bs">
                                <option value="1">Básico</option>
                                <option value="2">Intermedio</option>
                                <option value="3">Avanzado</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6  mb-4">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Nivel de oralidad*:
                              </label>
                              <select className="form-select form-select-sm single-select select-bs">
                                <option value="1">Básico</option>
                                <option value="2">Intermedio</option>
                                <option value="3">Avanzado</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6  mb-4">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Nivel de lectura*:
                              </label>
                              <select className="form-select form-select-sm single-select select-bs">
                                <option value="1">Básico</option>
                                <option value="2">Intermedio</option>
                                <option value="3">Avanzado</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  }
                  modalFooter={
                    <div className="d-flex justify-content-between w-100">
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm text-center px-4"
                        data-bs-dismiss="modal"
                      >
                        <i className="bi bi-trash3 me-1"></i>Eliminar idioma
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm text-center px-4"
                        data-bs-dismiss="modal"
                      >
                        Guardar cambios
                      </button>
                    </div>
                  }
                >
                  <div className="d-flex flex-wrap w-100 justify-content-start pe-3 border-bottom py-4 mb-3">
                    <div className="">
                      <h5 className="fw-medium">Inglés</h5>
                      <h6 className="fw-regular badge-intermedio">
                        Intermedio
                      </h6>
                      <small className=" label-years">
                        Nivel de escritura:{" "}
                        <span className="fw-medium">Intermedio</span>
                      </small>
                      <br />
                      <small className=" label-years">
                        Nivel de oralidad:{" "}
                        <span className="fw-medium">Intermedio</span>
                      </small>
                      <br />
                      <small className=" label-years">
                        Nivel de lectura:{" "}
                        <span className="fw-medium">Intermedio</span>
                      </small>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap w-100 justify-content-start pe-3  py-4 mb-3">
                    <div className="">
                      <h5 className="fw-medium">Español</h5>
                      <h6 className="fw-regular">
                        Competencia bilingüe o nativa
                      </h6>
                    </div>
                  </div>
                </Accordion>

                <Accordion
                  id="flush-headingFive"
                  idButton="nuevaHerramienta"
                  title="Herramientas Digitales"
                  icon={<BarChartIcon />}
                  titleModal="Añadir herramientas digitales"
                  modalBody={
                    <div className="row">
                      <div className="col-sm-12 col-md-12 mb-3">
                        <div className="border rounded-3 p-3 w-100">
                          <div className="form-group">
                            <label className="mb-1 fw-regular">
                              Nombre de la herramienta digital:
                            </label>

                            <input
                              name="tags-outside-4"
                              placeholder="Escribe la herramienta digital"
                              className="form-control-sm form-control tagify--outside"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  modalFooter={
                    <div className="text-center mx-auto">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm text-center px-4"
                        data-bs-dismiss="modal"
                      >
                        Guardar cambios
                      </button>
                    </div>
                  }
                >
                  <div className="d-flex flex-wrap w-100 justify-content-start pe-3 border-bottom py-4 mb-3">
                    <div className="">
                      <h5 className="fw-medium">MS Excel</h5>
                      <h6 className="fw-regular badge-avanzado">Avanzado</h6>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap w-100 justify-content-start pe-3 border-bottom py-4 mb-3">
                    <div className="">
                      <h5 className="fw-medium">Zoom</h5>
                      <h6 className="fw-regular badge-intermedio">
                        Intermedio
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap w-100 justify-content-start pe-3  py-4 mb-3">
                    <div className="">
                      <h5 className="fw-medium">MS Power Point</h5>
                      <h6 className="fw-regular badge-basico">Básico</h6>
                    </div>
                  </div>
                </Accordion>
                <Accordion
                  id="flush-headingSix"
                  idButton="editarAptitudes"
                  title="Otros conocimientos y aptitudes"
                  icon={<LoadingIcon />}
                  titleModal=" Editar otros conocimientos y aptitudes"
                  modalBody={
                    <div className="row">
                      <div className="col-sm-12 col-md-12 mb-3">
                        <div className="border rounded-3 p-3 w-100">
                          <div className="form-group">
                            <label className="mb-1 fw-regular">
                              Nombre del conocimiento o aptitud:
                            </label>
                            <input
                              name="tags-outside"
                              placeholder="Escribe tu aptitud"
                              className="form-control-sm form-control tagify--outside"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  modalFooter={
                    <div className="text-center mx-auto">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm text-center px-4"
                        data-bs-dismiss="modal"
                      >
                        Guardar cambios
                      </button>
                    </div>
                  }
                >
                  <div className="d-flex flex-wrap w-100 justify-content-start pe-3  py-4 ">
                    <div className=" d-flex">
                      <h6 className="fw-regular badge-aptitudes me-3">
                        Educación y comunicación asertiva
                      </h6>
                      <h6 className="fw-regular badge-aptitudes me-3">
                        Aptitud comunicativa
                      </h6>
                    </div>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cv;
