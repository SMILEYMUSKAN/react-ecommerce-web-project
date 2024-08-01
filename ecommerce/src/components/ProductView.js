import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppProvider";
import LoadingSpinner from "./Loader";

const ProductView = ({ match }) => {
  const {
    params: { id },
  } = match;

  const { productById, HandleAddToCart, cartItems } = useAppContext();
  const product = productById[id];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [id]);

  if (!product) return;

  const { title, price, description, images } = product;
  const [firstProductImg] = images;

  const addToCart = () => {
    HandleAddToCart(product);
  };

  const cartProduct = cartItems[id];

  return (
    <div className="flex flex-col gap-8 mx-auto px-4 py-6">
      {loading ? (
        <div className="flex justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="flex gap-10 mt-4">
            <div className="w-96 flex items-center justify-center">
              <img
                src={firstProductImg}
                alt={title}
                className="h-72 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <h1 className="font-semibold italic text-2xl">
                {title} | {cartProduct ? cartProduct.quantity : 0}
              </h1>

              <p className="italic text-lg">{description}</p>
              <p className="font-semibold italic text-2xl text-red-600">
                $ {price}
              </p>
              <button
                onClick={addToCart}
                className="bg-slate-700 rounded px-2 py-2 mt-5 text-white hover:bg-slate-900">
                Add To Cart
              </button>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            {images.length === 1 ? null : (
              <>
                {images.map((imagesUrl) => (
                  <div
                    key={imagesUrl}
                    className="w-96 flex items-center justify-center">
                    <img
                      src={imagesUrl}
                      alt="Sorry! Product Image Unavailable"
                      className="h-72 rounded"
                    />
                  </div>
                ))}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductView;
