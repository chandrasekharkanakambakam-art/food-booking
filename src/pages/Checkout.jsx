
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart = [], placeOrder }) {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [error, setError] = useState("");

  const subtotal = cart.reduce(
    (total, item) =>
      total + Number(item.price) * Number(item.quantity || 1),
    0
  );

  const delivery = 30;
  const total = subtotal + delivery;

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (cart.length === 0) {
      setError("Your cart is empty. Please add food items.");
      return;
    }

    if (
      !customer.name.trim() ||
      !customer.phone.trim() ||
      !customer.address.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[0-9]{10}$/.test(customer.phone)) {
      setError("Enter a valid 10-digit phone number.");
      return;
    }

    if (typeof placeOrder !== "function") {
      setError("Order function is not connected.");
      return;
    }

    placeOrder(customer);
    navigate("/orders");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-8">
          Complete Your Order
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Customer Form */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-5">
              Delivery Information
            </h2>

            <form onSubmit={handleSubmit}>

              <label className="block font-medium mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={customer.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border rounded-lg p-3 mb-4"
              />

              <label className="block font-medium mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={customer.phone}
                onChange={handleChange}
                placeholder="Enter 10-digit phone number"
                maxLength="10"
                className="w-full border rounded-lg p-3 mb-4"
              />

              <label className="block font-medium mb-2">
                Delivery Address
              </label>

              <textarea
                name="address"
                value={customer.address}
                onChange={handleChange}
                placeholder="Enter your delivery address"
                rows="4"
                className="w-full border rounded-lg p-3 mb-4"
              />

              {error && (
                <p className="text-red-600 text-sm mb-4">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg"
              >
                Place Order - ₹{total}
              </button>

            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-xl shadow-md h-fit">

            <h2 className="text-xl font-bold mb-5">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-500">
                Your cart is empty.
              </p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b py-3"
                >
                  <div>
                    <h3 className="font-semibold">
                      {item.name || item.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      ₹{item.price} × {item.quantity || 1}
                    </p>
                  </div>

                  <p className="font-semibold">
                    ₹{Number(item.price) * Number(item.quantity || 1)}
                  </p>
                </div>
              ))
            )}

            <div className="flex justify-between mt-5 mb-3">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Delivery Charge</span>
              <span>₹{delivery}</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-xl mt-4">
              <span>Total</span>
              <span className="text-orange-500">
                ₹{total}
              </span>
            </div>

            <button
              type="button"
              onClick={() => navigate("/cart")}
              className="w-full mt-5 border border-orange-500 text-orange-500 py-3 rounded-lg hover:bg-orange-50"
            >
              Back to Cart
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
