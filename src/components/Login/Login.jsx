import { useAuth } from "../../contexts/authProvider";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn, userLog } = useAuth();

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError("");

      await signIn(user.email, user.password);
      setUser({ email: "", password: "" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-center login-title">
        Ingresá tus datos de Puppy Palace
      </h1>
      <div className="login">
        {error && <p className="error">{error}</p>}
        <Form onSubmit={handleSubmit} className="w-100">
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              placeholder="Ingrese correo electrónico"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Contraseña"
              value={user.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button className="btn  btn-success" type="submit">
            Entrar
          </Button>
        </Form>
        <div className="register-text">
          <Link to="/register" >
            Registrá aqui tu correo electrónico
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
