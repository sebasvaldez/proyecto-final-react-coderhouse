import "./NavBar.css";
import { Container, Nav, Navbar,  } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormSearch from "../FormSearch/FormSearch";

import slider from "./assets/sli.png";
import {Cartwidget} from "../Cartwidget/Cartwidget";

const NavBar = () => {
  return (
    <>
      <figure className="sli-img">
        <Link to="/">
          <img src={slider} alt="" />
        </Link>
      </figure>
      <Navbar className="bg-navbar " expand="lg">
        <Container>
          <Link to="/">
            <span className="title-logo">Puppy Palace</span>
          </Link>

          <div className="d-lg-none text-decoration-none">
            <Link className="text-decoration-none" to="cart/cartlist">
              <Cartwidget />
            </Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-white menu-nav">
              <Link
                className="link text-white text-end"
                to="/category/estetica"
              >
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
        </Container>
        <div className="d-none d-lg-flex mx-2">
          <Link className="text-decoration-none" to="cart/cartlist">
            <Cartwidget />
          </Link>
        </div>
      </Navbar>
      <FormSearch />
      
    </>
  );
};

export default NavBar;
