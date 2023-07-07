import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./CheckOutForm.css";
import Swal from "sweetalert2";

const CheckOutForm = ({ confirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [mail2, setMail2] = useState("");

  const message = () => {
    Swal.fire("Pedido enviado!", "Click en el botón!", "success");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userdata = {
      name,
      phone,
      mail,
    };

    console.log(order);
  };

  return (
    <Form className="check-form mt-5">
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Control type="phone" placeholder="Telefono sin 0 ni 15" />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Ingrese su e-mail" />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail2">
        <Form.Control type="email" placeholder="Repita su e-mail" />
      </Form.Group>

      <Button
        onClick={(e) => {
          e.preventDefault();
          message();
        }}
        variant="success"
        type="submit"
      >
        Enviar pedido
      </Button>
    </Form>
  );
};

export default CheckOutForm;
