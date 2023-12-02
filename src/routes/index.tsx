import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ROUTES from "./utils";

const Home = lazy(() => import("@pages/private/Home"));
const People = lazy(() => import("@pages/private/People"));
const Collaborators = lazy(() => import("@pages/private/Collaborators"));
const Cv = lazy(() => import("@pages/private/Cv"));
const ViewCv = lazy(() => import("@pages/private/ViewCv"));

const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Cargando ...</div>}>
      <Routes>
        <Route path={ROUTES.private.home} element={<Home />} />
        <Route path={ROUTES.private.people} element={<People />} />
        <Route
          path={ROUTES.private.collaborators}
          element={<Collaborators />}
        />
        <Route path={ROUTES.private.cv} element={<Cv />} />
        <Route path={ROUTES.private.viewCV} element={<ViewCv />} />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRouter;
