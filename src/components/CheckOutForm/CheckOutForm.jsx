import { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./CheckOutForm.css";
import Swal from "sweetalert2";
import { createOrder } from "../../../asyncMock";
import { CartContext } from "../../contexts/CartProvider";
import Spinner from "../Spinner/Spinner";

const CheckOutForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [mail2, setMail2] = useState("");
  const [mailError, setMailError] = useState(false);
  const [cart, setCart] = useContext(CartContext);
  const [numOrder, setNumOrder] = useState("");
  const [loading, setLoading] = useState(false);

  const message = (num) => {
    Swal.fire(
      `Su número de orden es: ${num}!`,
      "Click en el botón!",
      "success"
    );
  };

  const orderData = {
    name,
    phone,
    mail,
    item: cart,
    date: new Date().toString(),
  };

  useEffect(() => {}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mail === mail2) {
      setLoading(true);
      const createdOrder = await createOrder(orderData);
      setTimeout(() => {
        setNumOrder(createdOrder);
        setLoading(false);
        message(createdOrder);

        setNumOrder("");
        setCart([]);
      }, 1000);
    } else {
      setMailError(true);
    }

    //setCart([]);
    //setMailError(false);
  };

  return (
    <>
    
    <Form className="check-form mt-5" onSubmit={handleSubmit}>
     
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Nombre"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Control
          type="tel"
          placeholder="Telefono sin 0 ni 15"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Ingrese su e-mail"
          required
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail2">
        <Form.Control
          type="email"
          placeholder="Repita su e-mail"
          required
          value={mail2}
          onChange={(e) => setMail2(e.target.value)}
        />
      </Form.Group>
      {mailError && <p className="mail-error">Los mails no coinciden</p>}

      <Button disabled={loading} variant="success" type="submit">
        Enviar pedido
      </Button>
    </Form>
    {loading && (
      <div className="overlay">

        <Spinner />
      </div>
    )}
    </>
  );
};

export default CheckOutForm;
