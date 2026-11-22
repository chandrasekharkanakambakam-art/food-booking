import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">

      <div className="max-w-7xl mx-auto px-5 py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-orange-500">
            FoodieHub
          </h2>

          <p className="text-gray-400 mt-4">
            Delicious food delivered to your doorstep.
            Order your favorite meals anytime.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <Link to="/" className="hover:text-orange-500">Home</Link>
            <Link to="/menu" className="hover:text-orange-500">Menu</Link>
            <Link to="/cart" className="hover:text-orange-500">Cart</Link>
            <Link to="/orders" className="hover:text-orange-500">My Orders</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">
            Contact Us
          </h3>

          <p className="text-gray-400">📧 support@foodiehub.com</p>
          <p className="text-gray-400 mt-3">📞 +91 9876543210</p>
          <p className="text-gray-400 mt-3">📍 Hyderabad, India</p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-5 text-gray-400">
        © 2026 FoodieHub. All Rights Reserved.
      </div>

    </footer>
  );
}