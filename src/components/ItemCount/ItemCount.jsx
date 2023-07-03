import './ItemCount.css'
import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > initial) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div className="buttons-cart">
        <p>Cantidad: </p>
        <Button variant="outline-secondary "  size="sm" onClick={decrement}>
          -
        </Button>
        <Button variant="outline-secondary " size="sm" onClick={increment}>
          +
        </Button>
        <h4 className="text-center">{quantity}</h4>
      </div>

      <div className='buttons-add-cart'>
        <Button variant='success' onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al carrito
        </Button>
        <Button variant="outline-primary ">Comprar ahora</Button>
      </div>

    </div>
  );
};

export default ItemCount;
