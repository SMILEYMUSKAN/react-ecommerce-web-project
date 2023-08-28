import { useAppContext } from "../context/AppProvider";
import ProductCard from "./ProductCard";

var ProductView = ({ match }) => {
  var {
    params: { id },
  } = match;
  var { productList } = useAppContext();
  var product = productList.find((products) => products.id == id);

  if (!product) return <div>Product Not Found!</div>;

  return (
    <div className="flex justify-center flex-wrap ">
      {console.log("Match :", match, "ID : ", id, ":: ROUTER PROPS & Id ::")}
      {console.log(product, ":: PRODUCTS FROM PRODUCTS VIEW ::")}
      <ProductCard product={product} />
    </div>
  );
};

export default ProductView;
