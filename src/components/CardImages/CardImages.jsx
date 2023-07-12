import { Card } from "react-bootstrap";
import "./CardImages.css";
import { Link } from "react-router-dom";
//import spinner from "react-bootstrap";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
const CardImages = ({ products }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);



  return products.map(({ id, url_imagen, nombre, stock, categoria }) => {
    return (
      <Card onClick={() => {setLoading(true) 
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }} className="card-styles" key={id}>
        <Link to={`/item/${id}`} className="Link">
          <Card.Img variant="top" src={url_imagen} />
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>Unidades: {stock}</Card.Text>
          </Card.Body>
        </Link>
        {loading && (
          <div className="overlay">
            <Spinner />
          </div>
        )}
      </Card>
    );
  });
};

export default CardImages;
