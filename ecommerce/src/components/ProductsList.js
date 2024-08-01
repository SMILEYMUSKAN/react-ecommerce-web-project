import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppProvider";
import ProductCard from "./ProductCard";
import LoadingSpinner from "./Loader";

var ProductList = () => {
  var { productList } = useAppContext();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="product-list">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {productList.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default ProductList;
