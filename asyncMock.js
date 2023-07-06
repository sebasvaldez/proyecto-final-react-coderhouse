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



export const filterCategory = async (categoria) => {

  const categoryRef= collection(db, "products");
  const q =  query(categoryRef, where("categoria", "==", categoria));
  const querySnapshot = await getDocs(q);
  const response = [];
  querySnapshot.docs.map((doc) => {
    response.push({ ...doc.data(), id: doc.id });
  });
  return response;
};


//buscador por palabra clave


