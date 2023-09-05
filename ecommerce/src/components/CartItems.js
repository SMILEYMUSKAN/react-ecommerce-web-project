import React, { Component } from "react";
import { AppContext } from "../context/AppProvider";
import CartDetails from "./CartItemsDetails";
import PageLink from "./PageLinks";


class CartItems extends Component {
  render() {
    return (
      <section className="container mx-auto py-4">
        <h1 className="mb-4 italic text-slate-900 text-3xl underline text-center">
          Cart Items
        </h1>
        <AppContext.Consumer>
          {({ allCartItems, cartCount, totalCartPrice }) => {
            return cartCount > 0 ? (
              <div className="">
                {allCartItems.map((product) => (
                  <CartDetails product={product} key={product.id} />
                ))}
                <h1 className="text-lg font-semibold mt-4">
                  Total : ${totalCartPrice}{" "}
                </h1>
                  <PageLink to="/checkout">
                <button  className="bg-slate-700 rounded px-2 py-2 mt-5 text-white hover:bg-slate-900">
                  Proceed to checkout
                </button>
                </PageLink>
              </div>
            ) : (
              <p className="text-center mt-8 italic text-lg">
                Your Cart Is Empty....
              </p>
            );
          }}
        </AppContext.Consumer>
      </section>
    );
  }
}

/*
<div>
            {allCartItems.map((product) => <CartDetails product={ product }/>)}
            </div>
*/
export default CartItems;
