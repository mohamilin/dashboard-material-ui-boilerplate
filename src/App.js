import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Container from "@mui/material/Container";
import Loading from "./components/Loading";
// import RequireAuth from './features/auth/RequireAuth';

const Login = lazy(() => import("./pages/Login"));
const RequireAuth = lazy(() => import("./features/auth/RequireAuth"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/404"));
const General = lazy(() => import("./pages/general-data/general"));
const TahunPelajaran = lazy(() =>
  import("./pages/general-data/tahun-pelajaran")
);

const Users = lazy(() => import('./pages/Users'));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <Container component="main" maxWidth="xl">
            <Loading />
          </Container>
        }
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route index path="/dashboard" element={<Dashboard />} />
            <Route path="general" element={<General />}>
              <Route path="tahun-pelajaran" element={<TahunPelajaran />} />
              <Route path="users" element={<Users />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
