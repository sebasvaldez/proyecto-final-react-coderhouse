import { Card } from "react-bootstrap";
import "./CardImages.css";
import { Link } from "react-router-dom";

const CardImages = ({ products }) => {
  return products.map(({ id, url_imagen, nombre, stock, categoria }) => {
    return (
      <Card style={{ width: "25rem", marginTop: "2rem" }} key={id}>
        <Link to={`/item/${id}`} className="Link">
          <Card.Img variant="top" src={url_imagen} />
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>Unidades: {stock}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    );
  });
};

export default CardImages;
