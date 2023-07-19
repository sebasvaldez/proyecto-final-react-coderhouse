import { useAuth } from "../../contexts/authProvider";
import "./Register.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const Register = () => {
  const { signUp } = useAuth();

  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   const userCreated= await signUp(user.email, user.password);

   setTimeout(() => {
     console.log(userCreated.user);

     ////minuto 58:00!!!https://www.youtube.com/watch?v=H_vEJt5Id_I&t=745s

   }, 1500);

    setUser({ email: "", password: "" });
  };

  return (
    <div className="register">
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
