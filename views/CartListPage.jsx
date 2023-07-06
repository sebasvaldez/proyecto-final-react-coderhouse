import { useState, useContext } from "react";
import { CartContext } from "../src/contexts/CartProvider";
import TrashIcon from "../src/components/TrashIcon/TrashIcon";
const CartListPage = () => {
  const [cart, setCart] = useContext(CartContext);

  const cuantity = cart.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);


  const totalPrice= cart.reduce((acc, current) => {


    return acc + current.quantity * current.precio;
  }, 0);   


  return (
    <div>
      <h2 className="cart-products">Vas a comprar estos {cuantity} productos</h2>
      {cart.map((item)=>{
        return(
          <div className="d-flex" key={item.id}>
            {/* <h3>{item.nombre}</h3> */}
            <figure className="cart-image">
              <img src={item.url_imagen} alt="" />
            </figure>
            <p >X {item.quantity}</p>
            <p>Precio unitario: {item.precio}</p>
            <button onClick={()=>{setCart((currentItems)=>{
              return currentItems.filter((itemFilter)=>itemFilter.id !== item.id)
            })}}>{<TrashIcon/>}</button>
          </div>
        ) 
      })}
      <h2>Total price: {totalPrice}</h2>
      <button onClick={()=>{console.log(cart)}}>checkout</button>
    </div>
  );
};

export default CartListPage;
