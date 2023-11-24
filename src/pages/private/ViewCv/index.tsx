import { CSSProperties } from "react";
import { Accordion, Layout, ProfileCard } from "..";
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

const containerStyles = {
  maxWidth: "98%",
};

const imgStyles: CSSProperties = {
  objectFit: "contain",
};

const ViewCv = () => {
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
        />

        <div className="container" style={containerStyles}>
          <div className="row">
            <div className="col-sm-12 col-12">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <Accordion
                  id="flush-collapseOne"
                  idButton="nuevaExperiencia"
                  title="Experiencia"
                  icon={<WorkIcon />}
                  actions={false}
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
                  </div>
                </Accordion>

                <Accordion
                  id="flush-headingTwo"
                  idButton="nuevaEducacion"
                  title="Educación"
                  icon={<EducationIcon />}
                  actions={false}
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
                  </div>
                </Accordion>

                <Accordion
                  id="flush-headingThree"
                  idButton="nuevaCertificacion"
                  title="Certificaciones, Diplomados y otros."
                  icon={<BadgeIcon />}
                  actions={false}
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
                  </div>
                </Accordion>

                <Accordion
                  title="Idiomas"
                  id="flush-headingFour"
                  idButton="nuevoIdioma"
                  icon={<WorldIcon />}
                  actions={false}
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
                  actions={false}
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
                  actions={false}
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

export default ViewCv;
