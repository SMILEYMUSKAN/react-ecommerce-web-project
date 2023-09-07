import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../firebase";

var OrderHistory = () => {
  var [orders, setOrders] = useState([]);
  var [loading, setLoading] = useState(true);

  useEffect(() => {
    getDocs(collection(database, "orderHistory"))
      .then((dbCollection) => {
        var ordersInDB = [];
        dbCollection.forEach((doc) => {
          var orderData = doc.data();
          ordersInDB.push({ ...orderData, id: doc.id });
        });
        setOrders(ordersInDB);
        setLoading(false);
        console.log(
          ordersInDB,
          ":: OrderHistory -> useEffect -> dbCollection -> ordersInDB ::"
        );
      })
      .catch(console.log);
  }, []);

  return (
    <div className="p-10">
      <div>
        {loading ? (
          <p className="text-3xl italic">Fetching Orders.......</p>
        ) : (
          <h1 className="text-2xl italic mb-5 ">
            Order History | {orders.length}
          </h1>
        )}
      </div>
      <section>
        {orders.map((order, indexValue) => (
          <div
            key={order.id}
            className="text-lg italic border-b-2 border-slate-500 mt-3"
          >
            <h2 className="font-semibold mb-3 text-xl">
              Order ( {indexValue + 1} )
            </h2>
            <ul>
              {order.products.map((product, productIndexVlue) => (
                <li key={productIndexVlue}>
                  {product.title} - {product.quantity}x = {product.totalPrice}
                </li>
              ))}
              <div className="mt-2">
                <li>Shipping Address : {order.address}</li>
                <li>Order Placed At : {order.orderPlaced}</li>
              </div>
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OrderHistory;
