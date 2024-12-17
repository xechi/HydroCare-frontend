import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginComponent from "./components/LoginComponent";
import RegistrasiComponent from "./components/RegistrasiComponent"; // Import RegistrasiComponent
import HomePage from "./page/HomePage";
import EdukasiPage from "./page/EdukasiPage";
import ArtikelEdukasi from "./page/ArtikelEdukasi";
import ArtikelBerita from "./page/ArtikelBerita";
import HydroAI from "./page/HydroAI";
import SingleVideo from "./page/SingleVideo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegistrasiComponent />} />
        <Route path="/edukasi" element={<PrivateRoute element={<ArtikelEdukasi />} />} />
        <Route path="/artikeledukasi" element={<ArtikelEdukasi />} />
        <Route path="/artikelberita" element={<ArtikelBerita />} />
        <Route path="/hydro-ai" element={<PrivateRoute element={<HydroAI />} />} />
        <Route path="/video" element={<SingleVideo />} />
      </Routes>
    </Router>
  );
};

export default App;
