import React, { Component } from "react";
import { AppContext } from "../context/AppProvider";
import CartDetails from "./CartItemsDetails";
import PageLink from "./PageLinks";
import LoadingSpinner from "./Loader";

class CartItems extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render() {
    const { loading } = this.state;

    return (
      <section className="py-4 flex flex-col">
        <h1 className="mb-4 text-slate-900 text-4xl italic font-semibold text-center">
          Cart Items
        </h1>

        {loading ? (
          <div className="flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <AppContext.Consumer>
            {({ allCartItems, cartCount, totalCartPrice }) => {
              return cartCount > 0 ? (
                <div className="p-4 mt-2">
                  {allCartItems.map((product) => (
                    <CartDetails product={product} key={product.id} />
                  ))}
                  <h1 className="text-lg font-semibold mt-4">
                    Total:
                    <span className="text-green-500">${totalCartPrice}</span>
                  </h1>
                  {/* <PageLink to="/checkout"> */}
                  <button className="bg-slate-700 rounded px-2 py-2 mt-5 text-white hover:bg-slate-900">
                    Proceed to checkout
                  </button>
                  {/* </PageLink> */}
                </div>
              ) : (
                <p className="text-2xl font-semibold text-center mt-52">
                  Your Cart Is Empty....
                </p>
              );
            }}
          </AppContext.Consumer>
        )}
      </section>
    );
  }
}

export default CartItems;
