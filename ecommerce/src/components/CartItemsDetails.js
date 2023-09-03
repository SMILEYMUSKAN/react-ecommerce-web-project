import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class CartDetails extends Component {
  render() {
    var { title, thumbnail, price, quantity, id } = this.props.product;
    var totalValue =
      quantity == 1
        ? `$${price}`
        : `${quantity} x $${price} = $${quantity * price}`;

    return (
      <div className="flex items-center mb-4 gap-4 border-b-2 border-slate-500">
        <img src={thumbnail} className="w-24 rounded" />
        <div className="flex-1">
          <Link to={`/product/${id}`} className="text-xl font-semibold">
            {title}
          </Link>

          <p>Price : {totalValue}</p>
          <p>Quantity : {quantity}</p>
        </div>
        {console.log(title, "I'M title FROM CartDetails ")}
      </div>
    );
  }
}

export default CartDetails;
