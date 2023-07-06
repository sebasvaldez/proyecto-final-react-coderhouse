import { useState, useEffect } from "react";

import { getProducts } from "../../../asyncMock.js";

import CardImages from "../CardImages/CardImages";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, []);

  console.log(products)
  return (
    <div className="imgContainer">
      <CardImages products={products} />;
    </div>
  );
};

export default ItemListContainer;
