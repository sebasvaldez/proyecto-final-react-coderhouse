import { Button, Form } from "react-bootstrap";
import "./FormSearch.css";
import SearchIcon from "../SearchIcon/SearchIcon";
import { Link } from "react-router-dom";
import { getProducts } from "../../../asyncMock";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../contexts/CartProvider";

const FormSearch = () => {
  const [products, setProducts] = useState([]);

  const [word, setWord] = useState("");

  const [search, setSearch] = useContext(SearchContext);

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, []);

  const handleSearch = (products) => {
    const arrayResults = [];
    products.forEach((product) => {
      if (
        product.nombre.toLowerCase().includes(word.toLowerCase()) ||
        product.descripcion.toLowerCase().includes(word.toLowerCase())
      ) {
        arrayResults.push(product);
      }
    });

    return arrayResults;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const arrayResults = handleSearch(products);
    setSearch(arrayResults);
  };
  return (
    <div className="form-search">
      <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Control
          required
          type="search"
          placeholder="Buscar"
          className="me-2"
          aria-label="Search"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />

        <SearchIcon />
      </Form>
    </div>
  );
};

export default FormSearch;
