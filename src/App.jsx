import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CartProvider from "./contexts/CartProvider";
import HomePage from "../views/HomePage";
import AccesoriesPage from "../views/AccesoriesPage";
import AestheticPage from "../views/AestheticPage";
import SnacksPage from "../views/SnacksPage";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartListPage from "../views/CartListPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemSearchContainer from "./components/ItemSearchContainer/ItemSearchContainer";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/estetica" element={<AestheticPage />} />
          <Route path="/category/accesorios" element={<AccesoriesPage />} />
          <Route path="/category/snacks" element={<SnacksPage />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart/cartlist" element={<CartListPage />} />
          <Route path="/search/searchlist" element={<ItemSearchContainer />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
