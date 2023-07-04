import { useState, useEffect } from "react";
import CardImages from "../src/components/CardImages/CardImages";
import { filterCategory } from "../asyncMock";


const AccesoriesPage = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    filterCategory("accesories").then((res) => setProducts(res));
  },[])



  return <div className="imgContainer">
    <CardImages products={products} />
  </div>;
};

export default AccesoriesPage;
