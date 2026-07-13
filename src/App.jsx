import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [toast, setToast] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [toast]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            cart={cart}
            setCart={setCart}
            toast={toast}
            setToast={setToast}
          />
        }
      />
      <Route
        path="/product/:id"
        element={
          <ProductPage
            cart={cart}
            setCart={setCart}
            setToast={setToast}
          />
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App; 