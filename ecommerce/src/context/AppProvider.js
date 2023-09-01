import React, { createContext, useState, useEffect, useContext } from "react";
import { Api_Endpoint } from "../Contants";

export var AppContext = createContext({
  productList: [],
  loading: true,
});

var AppProvider = ({ children }) => {
  var [productList, setproductList] = useState([]);
  var [loading, setLoading] = useState(true);
  var [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(Api_Endpoint.ProductsAPI)
      .then((res) => res.json())
      .then((res) => setproductList(res.products));
  }, []);

  var HandleAddToCart = (product) => {
    var addToCartProduct = cartItems.find(
      (cartProduct) => cartProduct.id == product.id
    );

    if (!addToCartProduct) {
      addToCartProduct = product;
      addToCartProduct.quantity = 1;
    } else {
      addToCartProduct.quantity++;
    }

    var FilterProduct = cartItems.filter(
      (cartproduct) => cartproduct.id != product.id
    );
    setCartItems([...FilterProduct, addToCartProduct]);

    console.log(":: PRODUCT ADDED ::", addToCartProduct);
  };

  return (
    <AppContext.Provider
      value={{
        productList,
        setLoading,
        loading,
        HandleAddToCart,
        cartItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export var useAppContext = () => useContext(AppContext);
export default AppProvider;
