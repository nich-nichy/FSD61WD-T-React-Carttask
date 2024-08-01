import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [currentProduct, setCurrentProduct] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              currentProduct={currentProduct}
              setCurrentProduct={setCurrentProduct}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cart
              currentProduct={currentProduct}
              setCurrentProduct={setCurrentProduct}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
