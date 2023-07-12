import { Form, Button } from "react-bootstrap";
import "./FormSearch.css";
import SearchIcon from "../SearchIcon/SearchIcon";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { SearchContext } from "../../contexts/CartProvider";

const FormSearch = () => {
    const [word, setWord] = useState("")    

    const [search, setSearch] = useContext(SearchContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(word);
       

  };


  return (
    <div className="form-search">
      <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Buscar"
          className="me-2"
          aria-label="Search"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <Link to="search/searchlist">
          <SearchIcon />
        </Link>
      </Form>
    </div>
  );
};

export default FormSearch;
