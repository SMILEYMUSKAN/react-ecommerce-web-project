import React, { createContext, useState, useEffect, useContext } from "react";
import { Api_Endpoint } from "../Contants";

export var AppContext = createContext({
  productList: [],
  loading: true,
});

var AppProvider = ({ children }) => {
  var [productList, setproductList] = useState([]);
  var [loading, setLoading] = useState(true);
  var [cartItems, setCartItems] = useState({});

  useEffect(() => {
    fetch(Api_Endpoint.ProductsAPI)
      .then((res) => res.json())
      .then((res) => setproductList(res.products));
  }, []);

  var HandleAddToCart = (product) => {
    var cartProduct = cartItems[product.id];
    if (!cartProduct) {
      cartProduct = product;
      cartProduct.quantity = 1;
    } else {
      cartProduct.quantity++;
    }

    cartProduct.totalPrice = cartProduct.quantity * cartProduct.price;

    setCartItems({ ...cartItems, [product.id]: cartProduct });
    console.log(cartItems, ":: I'M cartItems FROM APP PROVIDER ::");
  };

  var allCartItems = Object.values(cartItems);
  var cartCount = allCartItems.length;
  var totalCartPrice = 0;
  allCartItems.forEach((product) => {
    totalCartPrice = totalCartPrice + product.totalPrice;
  });

  var productById = {};
  productList.forEach((product) => {
    productById[product.id] = product;
  });

  return (
    <AppContext.Provider
      value={{
        productList,
        setLoading,
        loading,
        HandleAddToCart,
        allCartItems,
        cartCount,
        cartItems,
        productById,
        totalCartPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export var useAppContext = () => useContext(AppContext);
export default AppProvider;
