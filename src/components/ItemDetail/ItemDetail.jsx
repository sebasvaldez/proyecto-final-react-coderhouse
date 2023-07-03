import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({
  id,
  nombre,
  descripcion,
  url_imagen,
  stock,
  precio,
  categoria,
}) => {
  return (
    <div className="ItemDetail">
      <h2>{nombre}</h2>

      <figure>
        <img src={url_imagen} alt="" />
      </figure>
      <div className="ItemDetail-info">
        <h3>${precio}</h3>
        <p>Categoria: {categoria}</p>
        {stock > 0 ? <p>Producto disponible</p> : <p>Producto no disponible</p>}
        <p>{descripcion}</p>
        <p>Unidades: {stock}</p>
      </div>
      <ItemCount stock={stock} initial={1} />
    </div>
  );
};

export default ItemDetail;
