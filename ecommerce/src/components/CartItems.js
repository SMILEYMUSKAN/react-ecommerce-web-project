import React, { Component } from "react";
import { AppContext } from "../context/AppProvider";

class CartItems extends Component {
  render() {
    return (
      <section className="w-full flex flex-col items-center">
        <h1 className="m-5 italic text-slate-900 text-3xl underline">
          Cart Items
        </h1>
        <AppContext.Consumer>
          {({ cartItems }) => (
            <table className="border m-3 w-1/2 mx-auto px-3 py-5">
              <thead className="bg-slate-900 text-white italic rounded">
                <tr className="p-5">
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Per Price</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {cartItems.map((item) => (
                  <tr key={item.id} className="m-3">
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity * item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </AppContext.Consumer>
      </section>
    );
  }
}

export default CartItems;
