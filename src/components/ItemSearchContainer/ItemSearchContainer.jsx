import { useState, useEffect, useContext } from "react";
import { getProducts } from "../../../asyncMock";
import { SearchContext } from "../../contexts/CartProvider";
import CardImages from "../CardImages/CardImages";
import ItemNotFound from "../ItemNotFound/ItemNotFound";

const ItemSearchContainer = () => {
  const [products, setProducts] = useState([]);
  const [inputSearch, setInputSearch] = useContext(SearchContext);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, []);

  const arrayResults = [];
  products.forEach((product) => {
    if (
      product.nombre.toLowerCase().includes(inputSearch.toLowerCase()) ||
      product.descripcion.toLowerCase().includes(inputSearch.toLowerCase())
    ) {
      arrayResults.push(product);
    }
  });

  console.log(inputSearch)

  if (arrayResults.length == 0) {
    return <ItemNotFound />;
  } else {
    
    return (
      <div className="imgContainer">
        <CardImages products={arrayResults} />
      </div>
    );
  }
};

export default ItemSearchContainer;
