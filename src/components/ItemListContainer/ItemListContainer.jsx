import { useState, useEffect } from "react";

import { getProducts } from "../../../asyncMock.js";

import CardImages from "../CardImages/CardImages";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, []);

  
  return (
    <div className="imgContainer">
      <h6>Nuestra tienda</h6>
      <CardImages products={products} />;
    </div>
  );
};

export default ItemListContainer;
