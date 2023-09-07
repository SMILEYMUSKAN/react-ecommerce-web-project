import { useUserContext } from "../context/UserProvider";
import { useState } from "react";
import UIButton from "./UIButton";
import { useAppContext } from "../context/AppProvider";
import { database } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

var CheckOut = () => {
  var { user } = useUserContext();
  var [address, setAddress] = useState("");
  var { allCartItems, totalCartPrice, clearCart} = useAppContext();

  var SubmitHandler = (event) => {
    event.preventDefault();
    console.log(user, allCartItems, ":: CHECKOUT PAGE -> USER, ALL CART ITEMS");
    console.log(saveOrder, ":: USER & PRODUCT DETAILS");

    var products = allCartItems.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        title: product.title,
        price: product.price,
        totalPrice: product.totalPrice,
      };
    });

    var saveOrder = {
      userId: user.uid,
      email: user.email,
      totalCartPrice: totalCartPrice,
      address,
      products,
      orderPlaced : (new Date()).toLocaleString()
    };


    addDoc(collection(database, "orderHistory"), saveOrder)
      .then((docRef) => {
        console.log(":: SAVE ORDER SUCCCESS", docRef)
        clearCart()
      })
      .catch((error) => console.log(":: ERROR ::", error));

  };

  return (
    <div className="border w-full ">
      <form
        onSubmit={SubmitHandler}
        className="flex flex-col  items-center max-w-xl gap-5 mt-10 bg-slate-900 p-5 rounded-lg mx-auto"
      >
        <label className="text-xl italic font-semibold text-white">
          Email :
        </label>
        <input
          type="email"
          value={user.email}
          className="border w-80 p-2 italic rounded text-center"
        />
        <label className="text-xl italic font-semibold text-white">
          Address :
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border w-80 p-2 italic rounded text-center"
        />
        <UIButton disabled={!address || address.length < 10}>Submit</UIButton>
      </form>
    </div>
  );
};

export default CheckOut;
