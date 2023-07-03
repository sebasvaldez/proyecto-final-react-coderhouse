import "./NavBar.css";
import {
  Container,
  Nav,
  Navbar,
  Dropdown,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./assets/dog_lover_logo.png";
import Cartwidget from "../Cartwidget/Cartwidget";
import SearchIcon from "../SearchIcon/SearchIcon.jsx";

const NavBar = () => {
  return (
    <Navbar className="bg-navbar " expand="lg">
      <Container>
        {/* <figure className="logo-png">
        <Link to="/">
              <img src={logo} alt="" />
            </Link>
        </figure> */}
        <div className="d-lg-none">
          <Cartwidget />
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
          <Form className="d-flex" size="sm">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <SearchIcon />  
           
          </Form>
        </Navbar.Collapse>
      </Container>
      <div className="d-none d-lg-flex mx-2">
        <Cartwidget />
      </div>
    </Navbar>
  );
};

export default NavBar;
