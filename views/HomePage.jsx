import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../src/firebase/firebase.config";
import CardImages from "../src/components/CardImages/CardImages.jsx";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"));
      const querySnapshot = await getDocs(q);
      const response = [];
      querySnapshot.docs.map((doc) => {
        response.push({ ...doc.data(), id: doc.id });
      });
      console.log(response);
      setProducts(response);
    };
    getProducts();
  }, []);

  return <div>
    <h2>
    {products.map((product) => (
      <div key={product.id}>
        <h3>{product.nombre}</h3>
      </div>
    ))}
    </h2>
  </div>;
};

export default HomePage;
