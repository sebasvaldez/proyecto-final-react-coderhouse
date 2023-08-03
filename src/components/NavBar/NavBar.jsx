import "./NavBar.css";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormSearch from "../FormSearch/FormSearch";
import { useAuth } from "../../contexts/authProvider";
import { useNavigate } from "react-router-dom";
import slider from "./assets/sli.png";
import { Cartwidget } from "../Cartwidget/Cartwidget";
import LoginIcon from "../LoginIcon/LoginIcon";

const NavBar = () => {
  const navigate = useNavigate();
  const { logOut, userLog, loadingLog } = useAuth();

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

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

          <div className="cart-log">

          

          <div className="d-lg-none text-decoration-none">
            <Link className="text-decoration-none" to="cart/cartlist">
              <Cartwidget />
            </Link>
          </div>
          <div className="d-lg-none text-white">
            {!userLog ? (
              <Link to={"/login"} className="text-white">
                <LoginIcon />
              </Link>
            ) : (
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  size="sm"
                  className="bg-transparent drop-button-log"
                >
                  {userLog.email}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#/action-1"
                    className="py-0 "
                    onClick={handleLogOut}
                  >
                    Salir
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>


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

        <div className="d-none d-lg-flex me-auto">
          {!userLog ? (
            <Link to={"/login"} className="text-white">
              <LoginIcon />
            </Link>
          ) : (
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                size="sm"
                className="bg-transparent drop-button-log"
              >
                {userLog.email}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={handleLogOut}>
                  Salir
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>

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
