import "./NavBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./assets/dog_lover_logo.png";
import Cartwidget from "../Cartwidget/Cartwidget";
import FormSearch from "../FormSearch/FormSearch";


const NavBar = () => {




  return (
    <Navbar className="bg-navbar " expand="lg">
      <Container>
        <figure className="logo-png">
          <Link to="">
            <img src={logo} alt="" />
          </Link>
        </figure>
        <div className="d-lg-none text-decoration-none">
        <Link className="text-decoration-none" to="cart/cartlist">
        <Cartwidget />
        </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white menu-nav">
            <Link className="link text-white text-end" to="/category/estetica">
              Estética e Higiene
            </Link>
            <Link
              className="link text-white text-end"
              to="/category/accesorios"
            >
              Accesorios
            </Link>

            <Link className="link text-white text-end" to="/category/snacks">
              Snacks
            </Link>
          </Nav>

        </Navbar.Collapse>
          <FormSearch />
      </Container>
      <div className="d-none d-lg-flex mx-2">
        <Link className="text-decoration-none" to="cart/cartlist">
        <Cartwidget />
        </Link>
      </div>
    </Navbar>
  );
};

export default NavBar;
