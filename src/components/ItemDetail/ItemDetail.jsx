import "./ItemDetail.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";
import { useParams } from "react-router-dom";

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
  console.log(id)



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

  console.log(quantityPerItem);
  console.log(cart);

  return (
    <div className="ItemDetail">
      <h2>{nombre}</h2>
      <figure>
        <img src={url_imagen} alt="" />
      </figure>
      <div className="ItemDetail-info">
        <h3>${precio}</h3>
        <p>Categoria: {categoria}</p>
        {stock > 0 ? <p>Producto disponible</p> : <p>Producto no disponible</p>}
        <p>{descripcion}</p>
        <p>Unidades: {stock}</p>
        
      </div>
      <Button
        className="bg-success mb-3"
        onClick={() => {
          addToCart();
        }}
      >
        {quantityPerItem === 0 ? "Agregar al carrito" : "Agregar más"}
      </Button>

      <Button
        disabled={quantityPerItem === 0}
        className="bg-success mb-3"
        onClick={() => {
          removeFromCart();
        }}
      >
        Eliminar del carrito
      </Button>
    </div>
  );
};

export default ItemDetail;
