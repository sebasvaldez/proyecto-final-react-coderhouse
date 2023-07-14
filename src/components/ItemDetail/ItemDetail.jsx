import "./ItemDetail.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";
import { CartAdd, CartRemove } from "../Cartwidget/Cartwidget";

const ItemDetail = ({
  id,
  nombre,
  descripcion,
  url_imagen,
  stock,
  precio,
  categoria,
}) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currentItems) => {
      const itemFound = currentItems.find((item) => item.id === id);

      if (itemFound) {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...currentItems,
          {
            id,
            quantity: 1,
            nombre,
            precio,
            url_imagen,
            stock,
            descripcion,
            categoria,
          },
        ];
      }
    });
  };

  const removeFromCart = () => {
    setCart((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.cuantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantity = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantity(id);

  return (
    <div className="ItemDetail">
      <div className="ItemDetail-img">
        <h2>{nombre}</h2>
        <figure>
          <img src={url_imagen} alt="" />
        </figure>
      </div>
      <div className="ItemDetail-container">

        
      <div className="ItemDetail-info">
        <h3>${precio}</h3>
        <p>Categoria: {categoria}</p>
        {stock > 0 ? <p>Producto disponible</p> : <p>Producto no disponible</p>}
        <p>{descripcion}</p>
        <p>Unidades: {stock}</p>
      </div>
      <div className="buttons-item-detail">
        <Button
          className="bg-success mb-3 me-3 "
          size="sm"
          onClick={() => {
            addToCart();
          }}
        >
          {quantityPerItem === 0 ? "Agregar" : "Agregar más"} <CartAdd />
        </Button>

        <Button
          disabled={quantityPerItem === 0}
          className="bg-danger mb-3 me-3"
          size="sm"
          onClick={() => {
            removeFromCart();
          }}
        >
          Eliminar
          <CartRemove />
        </Button>
      </div>
      </div>
    </div>
  );
};

export default ItemDetail;
