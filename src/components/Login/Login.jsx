import { useAuth } from "../../contexts/authProvider";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useAuth();

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
      navigate('/');

    } catch (error) {
      //setError(error.code);

      //minuto 1:05:00 del video, explicacion de la sesion del login y logout
     
    }
  };

  return (
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
    </div>
  );
};

export default Login;
