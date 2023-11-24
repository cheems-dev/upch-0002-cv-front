import { CameraIcon, UploadIcon } from "@components/index";
import React, { CSSProperties, ChangeEvent, useRef, useState } from "react";
import { CustomModal } from ".";
import PeopleIcon from "@components/icons/PeopleIcon";

const imageStyles: CSSProperties = {
  height: "180px",
  width: "100%",
  objectFit: "cover",
};

interface Props {
  edit?: boolean;
  image: string;
  name: string;
  job: string;
  teams: string;
  dni: string;
  email: string;
  phone: string;
  address: string;
}

const ProfileCard: React.FC<Props> = (props) => {
  const { name, job, teams, dni, email, phone, address } = props;
  const { image, edit = false } = props;

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openUpPdf, setOpenUpPdf] = useState(false);

  const fileInputImageProfileRef = useRef<HTMLInputElement>(null);

  // Función para abrir el input al hacer clic en el div.p-image
  const handleImageProfileClick = () => {
    // Hacer clic en el elemento de entrada programáticamente
    if (fileInputImageProfileRef.current) {
      fileInputImageProfileRef.current.click();
    }
  };

  // Función para manejar el cambio en el archivo seleccionado
  const handleFileProfileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      // Puedes realizar acciones adicionales con el archivo seleccionado si es necesario
      console.log("Archivo seleccionado:", selectedFile);
    }
  };

  return (
    <>
      <div className="content-profile banner-image w-100">
        <img
          src="https://www.wallpapertip.com/wmimgs/49-494534_home-about-abstract-nature-urban-corporates-business-professional.jpg"
          style={imageStyles}
          className="profile-pic-2"
        />
        {edit && (
          <div
            className="p-image btn-opciones"
            onClick={handleImageProfileClick}
          >
            <i className="bi bi-pencil text-upch me-1 px-1 upload-button-2"></i>
            <input
              ref={fileInputImageProfileRef}
              className="file-upload-2"
              type="file"
              accept="image/*"
              onChange={handleFileProfileChange}
            />
          </div>
        )}
      </div>

      <div className="banner-info bg-white shadow-sm">
        <div className="container pt-4 pb-5 ">
          <div className="row">
            <div className="col-sm-12 col-md-2">
              <div className="d-flex align-items-center justify-content-center content-profile">
                <div className="circle">
                  <img
                    src={image}
                    className="rounded-circle shadow-sm my-3 profile-pic"
                  />
                  {edit && (
                    <div className="p-image" onClick={handleImageProfileClick}>
                      <CameraIcon />
                      <input
                        ref={fileInputImageProfileRef}
                        className="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileProfileChange}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-7">
              <div className="name-description ">
                <h3>{name}</h3>
                <h6 className="fw-medium">
                  <i className="bi bi-file-person me-1"></i> {job}
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="info-description ">
                <div className="d-flex">
                  <p className="fw-medium">
                    <i className="bi bi-people-fill me-1 text-upch"></i>{" "}
                    Equipos:{" "}
                    <span className="bg-light text-dark fw-regular rounded-3 ms-2 py-1 px-2">
                      {teams}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              {edit && (
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-sm btn-outline-secondary me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#editarDatos"
                    onClick={() => setOpenEditModal(!openEditModal)}
                  >
                    <i className="bi bi-pencil text-upch me-1"></i>Editar
                  </button>
                  <button
                    className="btn btn-sm btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#editarCV"
                    onClick={() => setOpenUpPdf(!openUpPdf)}
                  >
                    <i className="bi bi-cloud-upload me-1"></i> Subir CV
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-9">
              <div className="d-flex flex-wrap justify-content-between personal-info">
                <div>
                  <p className="mb-1">
                    <span className="me-1 text-upch">
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
                    Número de documento:
                  </p>
                  <p className="mb-1">{dni}</p>
                </div>
                <div>
                  <p className="mb-1">
                    <i className="bi bi-envelope text-upch me-1"></i>Correo
                    personal:
                  </p>
                  <p className="mb-1">{email}</p>
                </div>
                <div>
                  <p className="mb-1">
                    <i className="bi bi-telephone text-upch me-1"></i>Celular:
                  </p>
                  <p className="mb-1">{phone}</p>
                </div>
                <div>
                  <p className="mb-1">
                    <i className="bi bi-geo-alt text-upch me-1"></i> Dirección:
                  </p>
                  <p className="mb-1">{address}</p>
                </div>
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
                    >
                      Ingresar descripción
                    </textarea>
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
                    <input
                      name="tags-outside-5"
                      placeholder="Escribe la herramienta digital"
                      className="form-control-sm form-control tagify--outside"
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
                    >
                      Escribe tu dirección
                    </textarea>
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

      <CustomModal
        idButton="editarCV"
        title="Subir CV"
        icon={<UploadIcon />}
        onClose={() => setOpenUpPdf(!openUpPdf)}
        show={openUpPdf}
        modalBody={
          <>
            <div className="border rounded-3 p-4">
              <div className="row">
                <div className="col-sm-12 col-md-9 mb-3">
                  <div className="htmlForm-group">
                    <label className="mb-1 fw-regular">Subir CV</label>
                    <div className="input-group custom-file-button">
                      <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile"
                      />

                      <label
                        className="input-group-text px-4"
                        htmlFor="inputGroupFile"
                      >
                        {" "}
                        <i className="bi bi-cloud-arrow-up me-1"></i> Subir CV
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-3 pb-4 mt-4">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    <i className="bi bi-cloud-upload text-upch me-1"></i> Subir
                    otros documentos
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="row p-4">
                    <div className="col-md-9">
                      <div className="htmlForm-group">
                        <label className="mb-1 fw-regular">
                          Nombre del archivo
                        </label>
                        <div className="input-group custom-file-button">
                          <input
                            type="file"
                            className="form-control"
                            id="inputGroupFile"
                          />

                          <label
                            className="input-group-text px-4"
                            htmlFor="inputGroupFile"
                          >
                            {" "}
                            Subir documento
                          </label>
                        </div>
                      </div>

                      <div className="input-group mt-3 mb-3">
                        <input
                          className="form-control form-control-sm"
                          value="Certificado.pdf"
                          disabled
                        />
                        <button
                          className="btn btn-opciones m-0"
                          type="button"
                          id="button-addon2"
                        >
                          <i className="bi bi-x-circle"></i>
                        </button>
                      </div>

                      <div className="input-group mt-3 mb-3">
                        <input
                          className="form-control form-control-sm"
                          value="Certificado_curso.pdf"
                          disabled
                        />
                        <button
                          className="btn btn-opciones m-0"
                          type="button"
                          id="button-addon2"
                        >
                          <i className="bi bi-x-circle"></i>
                        </button>
                      </div>
                    </div>
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
    </>
  );
};

export default ProfileCard;
