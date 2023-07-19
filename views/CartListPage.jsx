import { useState, useContext } from "react";
import { CartContext } from "../src/contexts/CartProvider";
import TrashIcon from "../src/components/TrashIcon/TrashIcon";
import { Button } from "react-bootstrap";
import CheckOutForm from "../src/components/CheckOutForm/CheckOutForm";
import { CartListEmpty } from "../src/components/CartList/CartList.jsx";
import { createOrder } from "../asyncMock";

const CartListPage = () => {
  const [cart, setCart] = useContext(CartContext);

  const cuantity = cart.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);

  const totalPrice = cart.reduce((acc, current) => {
    return acc + current.quantity * current.precio;
  }, 0);

  if (cart.length > 0) {
    return (
      <div className="cart-container">
        <h2 className="cart-products">
          Vas a comprar estos {cuantity} productos
        </h2>
        {cart.map((item) => {
          return (
            <div className="cart-product-card" key={item.id}>
              {/* <h3>{item.nombre}</h3> */}
              <figure className="cart-image">
                <img src={item.url_imagen} alt="" />
              </figure>
              <div className="cart-price-quantity">
                <p>Cantidad: {item.quantity}</p>
                <p>Precio unitario: {item.precio}</p>
              </div>
              <Button
                className="cart-button"
                variant="transparent"
                onClick={() => {
                  setCart((currentItems) => {
                    return currentItems.filter(
                      (itemFilter) => itemFilter.id !== item.id
                    );
                  });
                }}
              >
                {<TrashIcon />}
              </Button>
            </div>
          );
        })}
        <h2>Total price: ${totalPrice}</h2>
        

        <CheckOutForm />
      </div>
    );
  } else {
    return <CartListEmpty />;
  }
};

export default CartListPage;
