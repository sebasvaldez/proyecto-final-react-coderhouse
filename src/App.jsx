import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import HomePage from "../views/HomePage";
import AccesoriesPage from "../views/AccesoriesPage";
import AestheticPage from "../views/AestheticPage";
import SnacksPage from "../views/SnacksPage";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
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
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
