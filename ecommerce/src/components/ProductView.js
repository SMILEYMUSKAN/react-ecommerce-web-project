import { useAppContext } from "../context/AppProvider";

var ProductView = ({ match }) => {
  var {
    params: { id },
  } = match;
  var { productList, HandleAddToCart } = useAppContext();
  var product = productList.find((products) => products.id == id);

  if (!product) return <div>Product Not Found!</div>;
  var { title, price, description, images } = product;
  var [firstProductImg] = images;

  var addToCart = () => {
    HandleAddToCart(product);
  };

  return (
    <div className="container mx-auto px-4 py-6 border">
      <div className="flex gap-10">
        <img src={firstProductImg} alt={title} className="w-80 rounded-lg " />
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold italic text-2xl ">{title}</h1>
          <p className="italic text-lg">{description}</p>
          <p className="font-semibold italic text-2xl">$ {price}</p>
          <button
            onClick={addToCart}
            className="bg-slate-700 rounded px-2 py-2 mt-5 text-white hover:bg-slate-900"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="flex ">
        {images.map((imagesUrl) => (
          <div key={imagesUrl}>
            <img
              src={imagesUrl}
              alt="Sorry! Product Image Unavaiable"
              className="w-1/2 mt-8 rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductView;
