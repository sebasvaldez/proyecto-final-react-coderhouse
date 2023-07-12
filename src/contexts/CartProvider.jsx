import { createContext, useState } from "react";

export const CartContext = createContext(null);
export const SearchContext = createContext("");

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={[search, setSearch]}>
      <CartContext.Provider value={[cart, setCart]}>
        {children}
      </CartContext.Provider>
    </SearchContext.Provider>
  );
};

export default CartProvider;
