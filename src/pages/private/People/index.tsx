import Photo01 from "@assets/img/photo_1.png";
import Photo02 from "@assets/img/photo_2.png";
import Photo03 from "@assets/img/photo_3.png";
import Photo04 from "@assets/img/photo_4.png";
import Photo05 from "@assets/img/photo_5.png";
import Photo06 from "@assets/img/photo_6.png";
import { useId, useState } from "react";
import { DropDownSelect, Layout, PersonCard } from "../components";
import { Option } from "../types/options.types";

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
];

const options: Option[] = [
  { name: "DIRECCIÓN GENERAL DE ADMINISTRACIÓN", value: "1" },
  { name: "Otro", value: "2" },
];

const optionsArea: Option[] = [
  { name: "DIRECCIÓN GENERAL DE ADMINISTRACIÓN", value: "1" },
  { name: "Otro", value: "2" },
];

const optionsSection: Option[] = [
  { name: "COMPENSACIONES Y DESEMPEÑO", value: "1" },
  { name: "Otro", value: "2" },
];

const optionsReport: Option[] = [
  { name: "MORA YTURRI MIRTHA LUCERO", value: "1" },
  { name: "COELLO JIMENEZ IRMA", value: "2" },
  { name: "RAMOS QUISPE ISABEL MILAGROS", value: "3" },
  { name: "HERNANDEZ GUILLEN ARIANA BRIGGIT", value: "4" },
  { name: "Otro", value: "5" },
];

const People = () => {
  const id = useId();
  const [selectedDepartamento, setSelectedDepartamento] = useState(options[0]);
  const [selectedArea, setSelectedArea] = useState(optionsArea[0]);
  const [selectedSection, setSelectedSection] = useState(optionsSection[0]);
  const [selectedReport, setSelectedReport] = useState(optionsReport[0]);

  return (
    <Layout>
      <div className="container" style={{ maxWidth: "98%" }}>
        <div className="row mt-4">
          <div className="col-12">
            <div className="opciones-title mt-4">
              <h4>Buscar en mi equipo</h4>
              <div className="separator"></div>
            </div>

            <div className="card shadow-sm">
              <div className="card-body px-4 pb-4 form-outline">
                <div className="row">
                  <div className="col-md-4 mt-2">
                    <DropDownSelect
                      label="Departamento:"
                      select={selectedDepartamento}
                      onSelect={setSelectedDepartamento}
                      options={options}
                    />
                  </div>

                  <div className="col-md-4 mt-2">
                    <DropDownSelect
                      label="Área:"
                      select={selectedArea}
                      onSelect={setSelectedArea}
                      options={optionsArea}
                    />
                  </div>

                  <div className="col-md-4 mt-2">
                    <DropDownSelect
                      label="Sección:"
                      select={selectedSection}
                      onSelect={setSelectedSection}
                      options={optionsSection}
                    />
                  </div>

                  <div className="col-md-4 mt-2">
                    <DropDownSelect
                      label="Reporta a:"
                      select={selectedReport}
                      onSelect={setSelectedReport}
                      options={optionsReport}
                    />
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
              <h4 className="">Listado de mi equipo</h4>
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
      </div>
    </Layout>
  );
};

export default People;
