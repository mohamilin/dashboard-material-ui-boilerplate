import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/404"));
const General = lazy(() => import("./pages/general-data/general"));
const TahunPelajaran = lazy(() => import("./pages/general-data/tahun-pelajaran"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <>
      <Suspense fallback={<div className="container">
      <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
      </div>}>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route index  path="/dashboard" element={<Dashboard />} />
          <Route  path="general" element={<General />}> 
              <Route path="tahun-pelajaran" element={<TahunPelajaran />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
