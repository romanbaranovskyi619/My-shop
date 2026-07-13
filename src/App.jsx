import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;