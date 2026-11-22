// import { Link } from "react-router-dom";

// export default function MyOrders({ orders }) {
//   return (
//     <div className="max-w-5xl mx-auto px-5 py-12">

//       <h1 className="text-3xl font-bold mb-8">
//         My Orders 📦
//       </h1>

//       {orders.length === 0 ? (
//         <div className="text-center bg-orange-50 p-12 rounded-2xl">
//           <h2 className="text-2xl font-bold">
//             No orders yet!
//           </h2>

//           <p className="text-gray-500 mt-3">
//             Your ordered food will appear here.
//           </p>

//           <Link
//             to="/menu"
//             className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-xl"
//           >
//             Order Food
//           </Link>
//         </div>
//       ) : (
//         <div className="space-y-6">

//           {orders.map((order) => (
//             <div
//               key={order.id}
//               className="bg-white shadow-md rounded-2xl p-6"
//             >

//               <div className="flex justify-between flex-wrap gap-3">
//                 <div>
//                   <h2 className="text-xl font-bold">
//                     Order #{order.id}
//                   </h2>
//                   <p className="text-gray-500 text-sm mt-1">
//                     {order.date}
//                   </p>
//                 </div>

//                 <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full h-fit">
//                   Order Placed
//                 </span>
//               </div>

//               <hr className="my-4" />

//               {order.items.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex justify-between py-2"
//                 >
//                   <span>
//                     {item.name} × {item.quantity}
//                   </span>
//                   <span>₹{item.price * item.quantity}</span>
//                 </div>
//               ))}

//               <hr className="my-4" />

//               <div className="space-y-2 text-sm">
//                 <p>
//                   <strong>Customer:</strong> {order.customer.name}
//                 </p>
//                 <p>
//                   <strong>Address:</strong> {order.customer.address}, {order.customer.city}
//                 </p>
//                 <p>
//                   <strong>Payment:</strong> {order.customer.payment}
//                 </p>
//               </div>

//               <div className="text-right text-xl font-bold text-orange-500 mt-4">
//                 Total: ₹{order.total}
//               </div>

//             </div>
//           ))}

//         </div>
//       )}

//     </div>
//   );
// }



import { Link } from "react-router-dom";

export default function MyOrders({ orders, cancelOrder }) {
  const handleCancel = (orderId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this order?"
    );

    if (confirmCancel) {
      cancelOrder(orderId);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-5 py-12">

      <h1 className="text-3xl font-bold mb-8">
        My Orders 📦
      </h1>

      {orders.length === 0 ? (
        <div className="text-center bg-orange-50 p-12 rounded-2xl">
          <h2 className="text-2xl font-bold">
            No orders yet!
          </h2>

          <p className="text-gray-500 mt-3">
            Your ordered food will appear here.
          </p>

          <Link
            to="/menu"
            className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-xl"
          >
            Order Food
          </Link>
        </div>
      ) : (
        <div className="space-y-6">

          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white shadow-md rounded-2xl p-6"
            >

              {/* Order Header */}

              <div className="flex justify-between items-center flex-wrap gap-3">

                <div>
                  <h2 className="text-xl font-bold">
                    Order #{order.id}
                  </h2>

                  <p className="text-gray-500 text-sm mt-1">
                    {order.date}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    order.status === "Cancelled"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {order.status || "Order Placed"}
                </span>

              </div>

              <hr className="my-4" />

              {/* Food Items */}

              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between py-2"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>

                  <span>
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}

              <hr className="my-4" />

              {/* Customer Details */}

              <div className="space-y-2 text-sm">
                <p>
                  <strong>Customer:</strong>{" "}
                  {order.customer?.name}
                </p>

                <p>
                  <strong>Address:</strong>{" "}
                  {order.customer?.address}, {order.customer?.city}
                </p>

                <p>
                  <strong>Payment:</strong>{" "}
                  {order.customer?.payment}
                </p>
              </div>

              {/* Total and Cancel Button */}

              <div className="flex justify-between items-center mt-6 flex-wrap gap-4">

                <div className="text-xl font-bold text-orange-500">
                  Total: ₹{order.total}
                </div>

                {order.status !== "Cancelled" ? (
                  <button
                    onClick={() => handleCancel(order.id)}
                    className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Cancel Order
                  </button>
                ) : (
                  <span className="text-red-500 font-semibold">
                    Order Cancelled
                  </span>
                )}

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}
