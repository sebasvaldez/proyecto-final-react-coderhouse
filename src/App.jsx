import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CartProvider from "./contexts/CartProvider";
import AuthProvider from "./contexts/authProvider";
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
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import CarouselSliders from "./components/CarouselSliders/CarouselSliders";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <NavBar />
          <CarouselSliders />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/estetica" element={<AestheticPage />} />
            <Route path="/category/accesorios" element={<AccesoriesPage />} />
            <Route path="/category/snacks" element={<SnacksPage />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route
              path="/cart/cartlist"
              element={
                <ProtectedRoutes>
                  <CartListPage />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/search/searchlist"
              element={<ItemSearchContainer />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
