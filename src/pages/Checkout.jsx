import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout({ cart, placeOrder }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    payment: "Cash on Delivery"
  });

  const total =
    cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ) + (cart.length > 0 ? 30 : 0);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      navigate("/menu");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    placeOrder(form);
    navigate("/orders");
  };

  return (
    <div className="max-w-4xl mx-auto px-5 py-12">

      <h1 className="text-3xl font-bold mb-8">
        Checkout Details
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow p-6 rounded-2xl space-y-5"
        >

          <h2 className="text-xl font-bold">
            Delivery Information
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={handleChange}
            required
            maxLength={10}
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="address"
            placeholder="Delivery Address"
            value={form.address}
            onChange={handleChange}
            required
            rows="3"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <h2 className="font-bold">Payment Method</h2>

          <select
            name="payment"
            value={form.payment}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Credit/Debit Card</option>
          </select>

          <button
            type="submit"
            disabled={cart.length === 0}
            className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 disabled:opacity-50"
          >
            Place Order - ₹{total}
          </button>

        </form>

        <div className="bg-orange-50 p-6 rounded-2xl h-fit">

          <h2 className="text-xl font-bold mb-5">
            Your Order
          </h2>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between mb-4"
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

          <div className="flex justify-between font-bold text-xl">
            <span>Total</span>
            <span className="text-orange-500">₹{total}</span>
          </div>

        </div>

      </div>

    </div>
  );
}