import { useId } from "react";
import ROUTES from "routes/utils";
import { CardProfile, Options } from "./components";
import { Layout } from "..";

const dataFake = [
  {
    title: "Editar mi CV",
    icon: "pen",
    className: "bg-cv",
    navigate: ROUTES.private.cv,
  },
  {
    title: "Mi equipo",
    icon: "people",
    className: "bg-equipo",
    navigate: ROUTES.private.people,
  },
  {
    title: "Listado de Colaboradores",
    icon: "people-white",
    className: "w-100  bg-equipo-2",
    navigate: ROUTES.private.collaborators,
  },
];

const Home = () => {
  const id = useId();

  return (
    <Layout>
      <div className="container" style={{ maxWidth: "98%" }}>
        <div className="row mt-4">
          {/* Profile */}
          <div className="col-sm-12 col-md-5">
            <CardProfile />
          </div>

          {/* Actions */}
          <div className="col-sm-12 col-md-7">
            <div className="opciones-title mt-4">
              <h4>Opciones</h4>
              <div className="separator" />
            </div>
            <div className="d-flex flex-wrap justify-content-between">
              {/* TODO: Refactor */}
              {dataFake.map((data, index) => (
                <Options
                  key={`${id}-${index}`}
                  icon={data.icon}
                  title={data.title}
                  className={data.className}
                  navigate={data.navigate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
