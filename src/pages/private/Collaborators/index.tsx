import Photo01 from "@assets/img/photo_1.png";
import Photo02 from "@assets/img/photo_2.png";
import Photo03 from "@assets/img/photo_3.png";
import Photo04 from "@assets/img/photo_4.png";
import Photo05 from "@assets/img/photo_5.png";
import Photo06 from "@assets/img/photo_6.png";
import { useId, useState } from "react";
import { Layout, PersonCard } from "../components";

const dataFake = [
  {
    name: "Ariana Briggit Hernandez Guillen",
    image: Photo01,
    teams: ["Compensaciones y desempeño"],
    job: "ANALISTA SENIOR DE COMPENSACIONES",
  },
  {
    name: "Irma Coello Jimenez",
    image: Photo02,
    teams: ["Administración de personal y remuneraciones"],
    job: "JEFE ADMINISTRACION DE PERSONAL Y REMUNERACIONES",
  },
  {
    name: "Isabel Milagros Ramos Quispe",
    image: Photo03,
    teams: ["Capacitación y desarrollo"],
    job: "COORDINADOR DE CAPACITACION Y DESARROLLO",
  },
  {
    name: "Ariana Briggit Hernandez Guillen",
    image: Photo06,
    teams: ["Compensaciones y desempeño"],
    job: "ANALISTA SENIOR DE COMPENSACIONES",
  },
  {
    name: "Ivan Enrique Davila Calle",
    image: Photo05,
    teams: ["Compensaciones y desempeño"],
    job: "ANALISTA SENIOR DE CONTROL DE GESTION",
  },
  {
    name: "Alvaro Luis Huidobro Ugarte",
    image: Photo04,
    teams: ["Compensaciones y desempeño"],
    job: "PRACTICANTE PRO DE COMPENSAC. Y CONTROL DE GESTION",
  },
  {
    name: "Ivan Enrique Davila Calle",
    image: Photo05,
    teams: ["Compensaciones y desempeño"],
    job: "ANALISTA SENIOR DE CONTROL DE GESTION",
  },
  {
    name: "Alvaro Luis Huidobro Ugarte",
    image: Photo04,
    teams: ["Compensaciones y desempeño"],
    job: "PRACTICANTE PRO DE COMPENSAC. Y CONTROL DE GESTION",
  },
  {
    name: "Alvaro Luis Huidobro Ugarte",
    image: Photo04,
    teams: ["Compensaciones y desempeño"],
    job: "PRACTICANTE PRO DE COMPENSAC. Y CONTROL DE GESTION",
  },
];

const Collaborators = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const id = useId();

  const handlePageClick = (page) => {
    // Lógica para cambiar de página
    setCurrentPage(page);
  };

  const renderPaginationItem = (page: number) => {
    const isActive = page === currentPage;
    const className = isActive ? "page-item active" : "page-item";

    return (
      <li className={className} key={page}>
        <a className="page-link" href="#" onClick={() => handlePageClick(page)}>
          {page}
        </a>
      </li>
    );
  };

  return (
    <Layout>
      <div className="container" style={{ maxWidth: "98%" }}>
        <div className="row mt-4">
          <div className="col-12">
            <div className="opciones-title mt-4">
              <h4>Buscar de colaboradores</h4>
              <div className="separator"></div>
            </div>

            <div className="card shadow-sm">
              <div className="card-body px-4 pb-4 form-outline">
                <div className="row">
                  <div className="col-md-4 mt-2">
                    <div className="form-group">
                      <label className="mb-1 fw-regular">Departamento:</label>
                      <select className="form-select form-select-sm single-select select-bs">
                        <option value="1">
                          DIRECCIÓN GENERAL DE ADMINISTRACIÓN
                        </option>
                        <option value="2">Otro</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 mt-2">
                    <div className="form-group">
                      <label className="mb-1 fw-regular">Área:</label>
                      <select className="form-select form-select-sm single-select select-bs">
                        <option value="1">
                          DIRECCIÓN DE DESARROLLO HUMANO
                        </option>
                        <option value="2">Otro</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 mt-2">
                    <div className="form-group">
                      <label className="mb-1 fw-regular">Sección:</label>
                      <select className="form-select form-select-sm single-select select-bs">
                        <option value="1">COMPENSACIONES Y DESEMPEÑO</option>
                        <option value="2">Otro</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 my-2 ">
                    <div className="form-group form-outline select-reporte">
                      <label className="mb-1 fw-regular">Reporta a:</label>
                      <select className="form-select form-select-sm single-select  select-bs">
                        <option value="1">MORA YTURRI MIRTHA LUCERO</option>

                        <option value="2">COELLO JIMENEZ IRMA</option>
                        <option value="3">RAMOS QUISPE ISABEL MILAGROS</option>
                        <option value="4">
                          HERNANDEZ GUILLEN ARIANA BRIGGIT
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 my-2">
                    <div className="form-group input-persona">
                      <label className="mb-1 fw-regular">
                        Nombres y apellidos:
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm form-control-outline"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 my-2">
                    <button className="btn btn-sm btn-primary mt-4 px-5">
                      Buscar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-sm-12">
            <div className="opciones-title mt-4">
              <h4 className="">Listado de colaboradores</h4>
              <div className="separator"></div>
            </div>
          </div>
          {dataFake.map((data, index) => (
            <PersonCard
              key={`${id}-${index}`}
              name={data.name}
              image={data.image}
              teams={data.teams}
              job={data.job}
            />
          ))}
        </div>

        <nav className="panel-footer mt-4">
          <ul className="pagination flex-wrap justify-content-center">
            <li className="first disabled">
              <a className="page-link" href="#">
                Primero
              </a>
            </li>
            <li className="prev disabled">
              <a className="page-link" href="#">
                «
              </a>
            </li>
            {renderPaginationItem(1, "Primero")}
            {renderPaginationItem(2)}
            {renderPaginationItem(3)}
            <li className="next">
              <a className="page-link" href="#">
                »
              </a>
            </li>
            <li className="last">
              <a className="page-link" href="#">
                Último
              </a>
            </li>
            <li className="pageNumbers">
              <a className="page-link" href="#">
                Página {currentPage}/3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  );
};

export default Collaborators;
