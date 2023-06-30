import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import HomePage from "../views/HomePage";
import AccesoriesPage from "../views/AccesoriesPage";
import AestheticPage from "../views/AestheticPage";
import SnacksPage from "../views/SnacksPage";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
const App = () => {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/estetica" element={<AestheticPage />} />
        <Route path="/category/accesorios" element={<AccesoriesPage />} />
        <Route path="/category/snacks" element={<SnacksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
