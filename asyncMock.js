import {
  collection,
  query,
  getDocs,
  doc,
  where,
  getDoc,
  addDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { db, auth } from "./src/firebase/firebase.config.js";

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
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No se encuentra el producto");
    }
  } catch (error) {
    console.log(error);
  }
};

export const filterCategory = async (categoria) => {
  const categoryRef = collection(db, "products");
  const q = query(categoryRef, where("categoria", "==", categoria));
  const querySnapshot = await getDocs(q);
  const response = [];
  querySnapshot.docs.map((doc) => {
    response.push({ ...doc.data(), id: doc.id });
  });
  return response;
};

//cargar orden de compras en firebase

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "purchaseorders"), { order });
    console.log("Document written with ID: ", docRef.id);
    const numId = docRef.id;
    return numId;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

//crear usuarios en firebase auth

export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

//login usuarios en firebase auth

export const signIn = async (email, password) => {
  const userCredentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  console.log(userCredentials.user.uid);
};



//logout usuarios en firebase auth

export const logOut = async () => {
 await signOut(auth);
};