import { CSSProperties, useCallback, useRef, useState } from "react";
import Tagify, { BaseTagData } from "@yaireo/tagify";
import Tags, { TagifyTagsReactProps } from "@yaireo/tagify/dist/react.tagify";
import DatePicker from "react-datepicker";

import imgLogo from "@assets/img/profile.png";
import imgLogoUpchRojo from "@assets/img/logo_upchrojo.png";
import imgLogoUsil from "@assets/img/logo_usil.png";
import imgLogoIdkn from "@assets/img/logo_lkdn.png";
import {
  BadgeIcon,
  BarChartIcon,
  EducationIcon,
  LoadingIcon,
  PeopleIcon,
  WorkIcon,
  WorldIcon,
} from "@components/index";
import {
  Accordion,
  CustomModal,
  DropDownSelect,
  Layout,
  ProfileCard,
} from "../components";

import "react-datepicker/dist/react-datepicker.css";

import { Option } from "../types/options.types";

const containerStyles = {
  maxWidth: "98%",
};

const imgStyles: CSSProperties = {
  objectFit: "contain",
};

const optionsModalOne: Option[] = [
  { name: "Educacion", value: "1" },
  { name: "Otro", value: "2" },
];
const optionsModalSecondFieldOne = [{ name: "Maestría", value: "1" }];
const optionsModalSecondFieldTwo = [{ name: "Educación", value: "1" }];
const optionsModalSecondFieldThree = [{ name: "Perú", value: "1" }];
const optionsModalSecondFieldFourth = [
  { name: "Universidad Peruana Cayetano Heredia", value: "1" },
  { name: "Otro", value: "2" },
];

const optionsModalThreeFieldOne = [
  { name: "Linkedin", value: "1" },
  { name: "Otro", value: "2" },
];
const optionsModalThreeFieldTwo = [
  { name: "Certificación", value: "1" },
  { name: "Diplomado", value: "2" },
  { name: "Curso", value: "3" },
  { name: "Otro", value: "4" },
];
const optionsModalThreeFieldThree = [
  { name: "2022", value: "1" },
  { name: "2023", value: "2" },
  { name: "2023", value: "3" },
  { name: "2024", value: "4" },
];

const optionsModalFourthFieldOne = [
  { name: "Ingles", value: "1" },
  { name: "Otro", value: "2" },
];
const optionsModalFourthFieldTwo = [
  { name: "Básico", value: "1" },
  { name: "Intermedio", value: "2" },
  { name: "Avanzado", value: "2" },
];
const optionsModalFourthFieldThree = [
  { name: "Básico", value: "1" },
  { name: "Intermedio", value: "2" },
  { name: "Avanzado", value: "2" },
];
const optionsModalFourthFieldFourth = [
  { name: "Básico", value: "1" },
  { name: "Intermedio", value: "2" },
  { name: "Avanzado", value: "2" },
];

const Cv = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  /* TODO: cambia el useState para los diferentes dataPicker */
  const [startDate, setStartDate] = useState(new Date());
  const [selectedModalOne, setSelectedModalOne] = useState(optionsModalOne[0]);
  const [selectedModalSecondFieldOne, setSelectedModalSecondOne] = useState(
    optionsModalSecondFieldOne[0],
  );
  const [selectedModalSecondFieldTwo, setSelectedModalSecondFieldTwo] =
    useState(optionsModalSecondFieldTwo[0]);
  const [selectedModalSecondFieldThree, setSelectedModalSecondFieldThree] =
    useState(optionsModalSecondFieldThree[0]);
  const [selectedModalSecondFieldFourth, setSelectedModalSecondFieldFourth] =
    useState(optionsModalSecondFieldFourth[0]);

  const [selectedModalThreeFieldOne, setSelectedModalThreeFieldOne] = useState(
    optionsModalThreeFieldOne[0],
  );
  const [selectedModalThreeFieldTwo, setSelectedModalThreeFieldTwo] = useState(
    optionsModalThreeFieldTwo[0],
  );
  const [selectedModalThreeFieldThree, setSelectedModalThreeFieldThree] =
    useState(optionsModalThreeFieldThree[0]);

  const [selectedModalFourthFieldOne, setSelectedModalFourthFieldOne] =
    useState(optionsModalFourthFieldOne[0]);
  const [selectedModalFourthFieldTwo, setSelectedModalFourthFieldTwo] =
    useState(optionsModalFourthFieldTwo[0]);
  const [selectedModalFourthFieldThree, setSelectedModalFourthFieldThree] =
    useState(optionsModalFourthFieldThree[0]);
  const [selectedModalFourthFieldFourth, setSelectedModalFourthFieldFourth] =
    useState(optionsModalFourthFieldFourth[0]);

  const tagifyRef01 = useRef<Tagify<BaseTagData>>({} as Tagify<BaseTagData>);
  const tagifyRef02 = useRef<Tagify<BaseTagData>>({} as Tagify<BaseTagData>);
  const tagifyRef03 = useRef<Tagify<BaseTagData>>({} as Tagify<BaseTagData>);
  const tagifyRef04 = useRef<Tagify<BaseTagData>>({} as Tagify<BaseTagData>);

  const tagifyProps: TagifyTagsReactProps<BaseTagData> = {
    loading: false,
  };

  const settings01 = {
    // Configuración de Tagify
    dropdown: {
      enabled: 0,
    },
    whitelist: [
      "Educación y comunicación asertiva",
      "Aptitud comunicativa",
      "Organización",
    ],
  };

  const settings02 = {
    // Configuración de Tagify
    dropdown: {
      enabled: 0,
    },
    whitelist: ["Comunicación", "MS Excel", "Blackboard"],
  };

  const settings03 = {
    // Configuración de Tagify
    dropdown: {
      enabled: 0,
    },
    whitelist: ["Comunicación", "MS Excel", "Blackboard"],
  };
  const settings04 = {
    // Configuración de Tagify
    dropdown: {
      enabled: 0,
    },
    whitelist: ["Canva", "MS Excel", "Blackboard"],
  };
  const tagifyRef05 = useRef<Tagify<BaseTagData>>({} as Tagify<BaseTagData>);
  const settings05 = {
    // Configuración de Tagify
    dropdown: {
      enabled: 0,
    },
    whitelist: ["Compensaciones y desempeño", "Dirección de desarrollo Humano"],
  };
  const onChange = useCallback(
    (e: {
      detail: {
        tagify: Tagify<BaseTagData>;
        value: string;
      };
    }) => {
      console.log(
        "CHANGED:",
        e.detail.tagify.value,
        e.detail.tagify.getCleanValue(),
        e.detail.value,
      );
    },
    [],
  );
  return (
    <Layout>
      <div>
        <ProfileCard
          image={imgLogo}
          name="Hector Cantaro Segura  "
          job="Coordinador academico"
          teams="Ecosistema académico"
          dni="79466450"
          email="hector.segura@gmail.com"
          phone="+51 963 113 582"
          address="  Jr. Alfonso Ugarte 376, San Martín de Porres 15102"
          edit
          setOpenModal={() => setOpenEditModal(!openEditModal)}
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
                                        strokeWidth="0"
                                      />
                                      <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                          d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                          stroke="#464c4d"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />{" "}
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
                                        strokeWidth="0"
                                      />
                                      <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                          d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                          stroke="#464c4d"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />{" "}
                                      </g>
                                    </svg>
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6  mb-3">
                            <DropDownSelect
                              label="Actividad de la empresa*:"
                              select={selectedModalOne}
                              onSelect={setSelectedModalOne}
                              options={optionsModalOne}
                            />
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
                                placeholder="Ingresar descripción"
                              />
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
                                placeholder="Ingresar descripción"
                              />
                            </div>
                          </div>

                          <div className="col-sm-12 col-md-12 mb-3">
                            <div className="form-group">
                              <label className="mb-1 fw-regular">
                                Aptitudes
                              </label>
                              <Tags
                                tagifyRef={tagifyRef02}
                                settings={settings02}
                                {...tagifyProps}
                                /*  onChange={onChange} */
                                className="tagify--outside border-0"
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
                        <i className="bi bi-trash3 me-1" />
                        Eliminar experiencia
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
                      <img src={imgLogoUpchRojo} style={imgStyles} alt="" />
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
                      <button
                        type="button"
                        className="btn btn-sm btn-opciones me-3"
                      >
                        <i className="bi bi-pencil text-upch me-1" />
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
                      <img src={imgLogoUsil} style={imgStyles} alt="" />
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
                      <button
                        type="button"
                        className="btn btn-sm btn-opciones me-3"
                      >
                        <i className="bi bi-pencil text-upch me-1" />
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
                            <DropDownSelect
                              label="Formación Académica*:"
                              select={selectedModalSecondFieldOne}
                              onSelect={setSelectedModalSecondOne}
                              options={optionsModalSecondFieldOne}
                            />
                          </div>
                          <div className="col-sm-12 col-md-6  mb-4">
                            <DropDownSelect
                              label="Disciplina académica*:"
                              select={selectedModalSecondFieldTwo}
                              onSelect={setSelectedModalSecondFieldTwo}
                              options={optionsModalSecondFieldTwo}
                            />
                          </div>
                          <div className="col-sm-12 col-md-6  mb-4">
                            <DropDownSelect
                              label="País de formación*:"
                              select={selectedModalSecondFieldThree}
                              onSelect={setSelectedModalSecondFieldThree}
                              options={optionsModalSecondFieldThree}
                            />
                          </div>
                          <div className="col-sm-12 col-md-6  mb-4">
                            <DropDownSelect
                              label="Institución*:"
                              select={selectedModalSecondFieldFourth}
                              onSelect={setSelectedModalSecondFieldFourth}
                              options={optionsModalSecondFieldFourth}
                            />
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
                                        strokeWidth="0"
                                      />
                                      <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                          d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                          stroke="#464c4d"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />{" "}
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
                                        strokeWidth="0"
                                      />
                                      <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                          d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                          stroke="#464c4d"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />{" "}
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
                        <i className="bi bi-trash3 me-1" />
                        Eliminar formación
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
                      <img src={imgLogoUpchRojo} style={imgStyles} alt="" />
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
                      <button
                        type="button"
                        className="btn btn-sm btn-opciones me-3"
                      >
                        <i className="bi bi-pencil text-upch me-1" />
                        Editar
                      </button>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap w-100 justify-content-start pe-3  py-4 mb-3">
                    <div className="d-flex align-items-start me-3">
                      <img src={imgLogoUsil} style={imgStyles} alt="" />
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
                      <button
                        type="button"
                        className="btn btn-sm btn-opciones me-3"
                      >
                        <i className="bi bi-pencil text-upch me-1" />
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
                        <DropDownSelect
                          label="Institución*:"
                          select={selectedModalThreeFieldOne}
                          onSelect={setSelectedModalThreeFieldOne}
                          options={optionsModalThreeFieldOne}
                        />
                      </div>
                      <div className="col-sm-12 col-md-6  mb-4">
                        <DropDownSelect
                          label="Tipo*:"
                          select={selectedModalThreeFieldTwo}
                          onSelect={setSelectedModalThreeFieldTwo}
                          options={optionsModalThreeFieldTwo}
                        />
                      </div>
                      <div className="col-sm-12 col-md-6  mb-4">
                        <DropDownSelect
                          label="Año de formación*:"
                          select={selectedModalThreeFieldThree}
                          onSelect={setSelectedModalThreeFieldThree}
                          options={optionsModalThreeFieldThree}
                        />
                      </div>
                      <div className="col-sm-12 col-md-6 mb-3">
                        <div className="form-group">
                          <label className="mb-1 fw-regular">Aptitudes</label>
                          <Tags
                            tagifyRef={tagifyRef03}
                            settings={settings03}
                            {...tagifyProps}
                            className="tagify--outside border-0"
                          />
                        </div>
                      </div>
                    </div>
                  }
                  modalFooter={
                    <>
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm text-center px-4"
                        data-bs-dismiss="modal"
                      >
                        <i className="bi bi-trash3 me-1" />
                        Eliminar
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
                      <img src={imgLogoIdkn} style={imgStyles} alt="" />
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
                      <button
                        type="button"
                        className="btn btn-sm btn-opciones me-3"
                      >
                        <i className="bi bi-pencil text-upch me-1" />
                        Editar
                      </button>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap w-100 justify-content-start pe-3  py-4 mb-3">
                    <div className="d-flex align-items-start me-3">
                      <img src={imgLogoIdkn} style={imgStyles} alt="" />
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
                      <button
                        type="button"
                        className="btn btn-sm btn-opciones me-3"
                      >
                        <i className="bi bi-pencil text-upch me-1" />
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
                            <DropDownSelect
                              label="Idioma*:"
                              select={selectedModalFourthFieldOne}
                              onSelect={setSelectedModalFourthFieldOne}
                              options={optionsModalFourthFieldOne}
                            />
                          </div>
                          <div className="col-sm-12 col-md-6  mb-4">
                            <DropDownSelect
                              label="Nivel de escritura*:"
                              select={selectedModalFourthFieldTwo}
                              onSelect={setSelectedModalFourthFieldTwo}
                              options={optionsModalFourthFieldTwo}
                            />
                          </div>
                          <div className="col-sm-12 col-md-6  mb-4">
                            <DropDownSelect
                              label="Nivel de oralidad*:"
                              select={selectedModalFourthFieldThree}
                              onSelect={setSelectedModalFourthFieldThree}
                              options={optionsModalFourthFieldThree}
                            />
                          </div>
                          <div className="col-sm-12 col-md-6  mb-4">
                            <DropDownSelect
                              label="Nivel de lectura*:"
                              select={selectedModalFourthFieldFourth}
                              onSelect={setSelectedModalFourthFieldFourth}
                              options={optionsModalFourthFieldFourth}
                            />
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
                        <i className="bi bi-trash3 me-1" />
                        Eliminar idioma
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

                            <Tags
                              tagifyRef={tagifyRef04}
                              settings={settings04}
                              {...tagifyProps}
                              className="tagify--outside border-0"
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
                            <Tags
                              tagifyRef={tagifyRef01}
                              settings={settings01}
                              {...tagifyProps}
                              className="tagify--outside border-0"
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
      <CustomModal
        idButton="editarCV"
        title="Editar datos personales"
        icon={<PeopleIcon />}
        onClose={() => setOpenEditModal(!openEditModal)}
        show={openEditModal}
        modalBody={
          <>
            <div className="row mt-2">
              <div className="col-12">
                <h6 className="fw-medium">Datos del Perfil</h6>
              </div>
            </div>
            <div className="border rounded-3 p-4">
              <div className="row">
                <div className="col-sm-12 col-md-12 mb-3">
                  <div className="htmlForm-group">
                    <label className="mb-1 fw-regular">
                      Descripción personal*
                    </label>
                    <textarea
                      id="motivotext"
                      name="motivotext"
                      className="form-control form-control-sm"
                      rows={3}
                      cols={50}
                      placeholder=" Ingresar descripción"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <h6 className="fw-medium">Datos personales</h6>
              </div>
            </div>
            <div className="border rounded-3 p-4">
              <div className="row">
                <div className="col-sm-12 col-md-4  mb-4">
                  <div className="htmlForm-group">
                    <label className="mb-1 fw-regular">
                      Número de documento*:
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-4  mb-4">
                  <div className="htmlForm-group">
                    <label className="mb-1 fw-regular">Nombres*:</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-4  mb-4">
                  <div className="htmlForm-group">
                    <label className="mb-1 fw-regular">Apellidos*:</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <h6 className="fw-medium">Datos del puesto actual</h6>
              </div>
            </div>
            <div className="border rounded-3 p-4">
              <div className="row">
                <div className="col-sm-12 col-md-6  mb-4">
                  <div className="htmlForm-group">
                    <label className="mb-1 fw-regular">
                      Nombre del cargo*:
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6  mb-4">
                  <div className="htmlForm-group">
                    <label className="mb-1 fw-regular">Equipos*:</label>
                    <Tags
                      tagifyRef={tagifyRef05}
                      settings={settings05}
                      {...tagifyProps}
                      onChange={onChange}
                      className="tagify--outside border-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <h6 className="fw-medium">Datos de contacto</h6>
              </div>
            </div>
            <div className="border rounded-3 p-4">
              <div className="row">
                <div className="col-sm-12 col-md-6  mb-4">
                  <div className="htmlForm-group">
                    <label className="mb-1 fw-regular">Correo personal*:</label>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6  mb-4">
                  <div className="htmlForm-group">
                    <label className="mb-1 fw-regular">Celular*:</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-12  mb-4">
                  <div className="htmlForm-group">
                    <label className="mb-1 fw-regular">Domicilio*:</label>
                    <textarea
                      id="motivotext"
                      name="motivotext"
                      className="form-control form-control-sm"
                      rows={3}
                      cols={50}
                      defaultValue="Escribe tu dirección"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        }
        modalFooter={
          <div className="mx-auto pb-3 mb-4">
            <button
              type="button"
              className="btn btn-primary btn-sm text-center px-4"
              data-bs-dismiss="modal"
            >
              Guardar cambios
            </button>
          </div>
        }
      />
    </Layout>
  );
};

export default Cv;
