import {
  collection,
  query,
  getDocs,
  doc,
  where,
  getDoc,
} from "firebase/firestore";
import { db } from "./src/firebase/firebase.config.js";

//Buscador de todos los productos
export const getProducts = async () => {
  try {
    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    const response = [];
    querySnapshot.docs.map((doc) => {
      response.push({ ...doc.data(), id: doc.id });
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

//Buscador de productos por id
export const getProductById = async (id) => {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        return docSnap.data();
    }else{
        console.log("No se encuentra el producto")
    }
  } catch (error) {
    console.log(error);
  }
};


//filtro por categoria
export const filterCategory = async (arr, categoriaId) => {
  const newArr = await arr.filter((item) => item.categoria_id === categoriaId);
  return newArr;
};

//buscador por nombre