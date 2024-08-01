import { Link } from "react-router-dom";

var ProductCard = ({ product }) => {
  return (
    <div className="product-card w-96 flex flex-col gap-4 bg-white hover:shadow-2xl  hover:-translate-y-1.5 cursor-pointer">
      <div className="h-64 flex items-center justify-center">
        <Link to={`/product/${product.id}`}>
          <img src={product.images[0]} className="h-64" />
        </Link>
      </div>
      <h3 className="text-2xl">{product.title}</h3>
      <p className="text-xl font-semibold text-red-600">$ {product.price}</p>
    </div>
  );
};

export default ProductCard;
