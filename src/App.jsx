import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Checkout from "./pages/CheckOut";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import Login from "./pages/Login";

function AppContent() {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // ADD TO CART
  const addToCart = (food) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === food.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...food, quantity: 1 }];
    });
  };

  // INCREASE QUANTITY
  const increase = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // DECREASE QUANTITY
  const decrease = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
 +         item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // REMOVE ITEM
  const remove = (id) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // PLACE ORDER
  const placeOrder = (customer) => {
    if (cart.length === 0) return;

    const subtotal = cart.reduce(
      (sum, item) =>
        sum + Number(item.price) * item.quantity,
      0
    );

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items: cart.map((item) => ({ ...item })),
      customer,
      subtotal,
      deliveryFee: 30,
      total: subtotal + 30,
      status: "Order Placed",
    };

    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
  };

  // CANCEL ORDER
  const cancelOrder = (orderId) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId &&
        order.status !== "Cancelled"
          ? { ...order, status: "Cancelled" }
          : order
      )
    );
  };

  // CART COUNT
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} />}
        />

        <Route
          path="/menu"
          element={<Menu addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increase={increase}
              decrease={decrease}
              remove={remove}
            />
          }
        />
           <Route
  path="/checkout"
  element={
    <Checkout cart={cart} placeOrder={placeOrder} />
  }
/>
      
        <Route
          path="/orders"
          element={
            <MyOrders
              orders={orders}
              cancelOrder={cancelOrder}
            />
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="*"
          element={<h1 className="text-center text-2xl mt-10">404 - Page Not Found</h1>}
        />

      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
