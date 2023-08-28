import React, { createContext, useState, useEffect, useContext } from "react";
import { Api_Endpoint } from "../Contants";

var AppContext = createContext({
    productList:[],
    loading: true
});

var AppProvider = ({ children }) => {
var [productList, setproductList] = useState([]);
var [loading, setLoading]         = useState(true);

useEffect(() => {
    fetch(Api_Endpoint.ProductsAPI)
    .then(res => res.json())
    .then(res => setproductList(res.products))
}, [])

return <AppContext.Provider value={{
    productList,
    setLoading,
    loading
}}>

 { children }
</AppContext.Provider>
}

export var useAppContext = () => useContext( AppContext );
export default AppProvider;

