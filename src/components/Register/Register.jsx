import { useAuth } from "../../contexts/authProvider";
import "./Register.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { signUp } = useAuth();

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

      await signUp(user.email, user.password);
      setUser({ email: "", password: "" });
      navigate('/login');
    } catch (error) {
      //setError(error.code);
      if (error.code === "auth/invalid-email") {
        setError("El correo electrónico no es válido");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("El correo electrónico ya está en uso");
      }
      if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener al menos 6 caracteres");
      }
    }
  };

  return (
    <div className="register">
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
          Registrarse
        </Button>
      </Form>
    </div>
  );
};

export default Register;
