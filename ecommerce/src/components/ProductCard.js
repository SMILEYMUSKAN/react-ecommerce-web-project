import { Link } from "react-router-dom";

var ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.images[0]} />
      </Link>
      <h3>{product.title}</h3>
      <p>$ {product.price}</p>
    </div>
  );
};

export default ProductCard;
