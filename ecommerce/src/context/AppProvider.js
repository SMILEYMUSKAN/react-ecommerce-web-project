import React, { createContext, useState, useEffect, useContext } from "react";
import { Api_Endpoint } from "../Contants";

export var AppContext = createContext({
  productList: [],
  loading: true,
});

var CART_PRODUCTS = "CART_PRODUCTS";
var localCartProducts = localStorage.getItem(CART_PRODUCTS)
  const parseLocalCartItems = JSON.parse(localCartProducts ? localCartProducts : "{}")

var AppProvider = ({ children }) => {
  var [productList, setproductList] = useState([]);
  var [loading, setLoading] = useState(true);
  var [cartItems, setCartItems] = useState(parseLocalCartItems);
  

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
    console.log(cartItems, ":: I'M cartItems FROM APP PROVIDER ::")
    
  };
  
  useEffect(() => {
    localStorage.setItem(CART_PRODUCTS, JSON.stringify(cartItems))
  }, [cartItems])

  var allCartItems = Object.values(cartItems);
  var cartCount = allCartItems.length;
  var totalCartPrice = 0;
  allCartItems.forEach((product) => {
    totalCartPrice = totalCartPrice + product.totalPrice;
  });

    var clearCart = () => {
      setCartItems({})
    }
    
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
        clearCart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export var useAppContext = () => useContext(AppContext);
export default AppProvider;