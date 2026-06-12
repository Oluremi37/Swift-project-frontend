import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Audit from "../pages/Audit";
import Report from "../pages/Report";
import Demo from "../pages/Demo";
import Loading from "../pages/Loading";
import ContactPage from "../pages/ContactPage";
import NotFound from "../pages/NotFound";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/report" element={<Report />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
