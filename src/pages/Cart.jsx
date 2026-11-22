import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

export default function Cart({
  cart,
  increase,
  decrease,
  remove
}) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = cart.length > 0 ? 30 : 0;
  const total = subtotal + delivery;

  return (
    <div className="max-w-5xl mx-auto px-5 py-12">

      <h1 className="text-3xl font-bold mb-8">
        Your Shopping Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-orange-50 rounded-2xl">
          <div className="text-6xl mb-4">🍽️</div>
          <h2 className="text-2xl font-bold">
            Your cart is empty!
          </h2>
          <p className="text-gray-500 mt-2">
            Add some delicious food to continue.
          </p>

          <Link
            to="/menu"
            className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-xl"
          >
            Explore Menu
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">

          <div className="md:col-span-2 bg-white p-5 rounded-2xl shadow">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increase={increase}
                decrease={decrease}
                remove={remove}
              />
            ))}
          </div>

          <div className="bg-orange-50 p-6 rounded-2xl h-fit">

            <h2 className="text-xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Delivery Fee</span>
              <span>₹{delivery}</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span className="text-orange-500">
                ₹{total}
              </span>
            </div>

            <Link
              to="/checkout"
              className="block text-center bg-orange-500 text-white py-3 rounded-xl mt-7 hover:bg-orange-600"
            >
              Proceed to Checkout
            </Link>

          </div>

        </div>
      )}

    </div>
  );
}