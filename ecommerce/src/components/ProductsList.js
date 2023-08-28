import { useAppContext } from "../context/AppProvider";
import ProductCard from "./ProductCard";

var ProductList = () => {
  var { productList } = useAppContext();
  return (
    <div className="product-list">
      {console.log(productList, ":: PRODUCT LIST PRODUCT FILE ::")}
      {productList.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
