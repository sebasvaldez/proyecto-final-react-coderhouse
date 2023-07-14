import { useState, useEffect, useContext } from "react";
import { getProducts } from "../../../asyncMock";
import { SearchContext } from "../../contexts/CartProvider";
import CardImages from "../CardImages/CardImages";
import ItemNotFound from "../ItemNotFound/ItemNotFound";

const ItemSearchContainer = () => {
 
  const [search, setSearch] = useContext(SearchContext);

  

  const arrayResults = search;

  if (arrayResults.length == 0 || search == []) {
    return <ItemNotFound />;
  } else if (search == "") {
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
