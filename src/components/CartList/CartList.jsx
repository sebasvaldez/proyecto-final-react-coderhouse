import shoppingCart from "../../assets/shopping-cart-empty.png";
import "./CartList.css";

export const CartListProducts = () => {
  return <div>CartList</div>;
};

export const CartListEmpty = () => {
  return (
    <div className="cart-container">
      <h2 className="cart-products mt-5">Aun no hay productos en el carrito</h2>
      <figure className="cart-shop-img mt-5">
        <img src={shoppingCart} alt="" />
      </figure>
    </div>
  );
};
