import React from "react";
import Navbar from "./Navbar";
import "./styles/cart.css";

const Cart = ({ currentProduct, setCurrentProduct }) => {
  const removeFromCart = (item) => {
    setCurrentProduct((prev) =>
      prev.filter((product) => product.id !== item.id)
    );
  };
  const returnSubtotal = () => {
    let total = 0;
    currentProduct.forEach((item) => {
      total += Number(item.finalPrice) * item.quantity;
    });
    return total;
  };

  const returnCount = () => {
    return currentProduct?.length;
  };
  return (
    <div>
      <Navbar currentProduct={currentProduct} />
      <div className="cart-wrapper">
        <div className="container m-5 p-5 pt-2 bg-light">
          <h2 className="p-2">Shopping Cart:</h2>
          <div
            className={
              currentProduct && currentProduct?.length > 0 ? "card p-1" : ""
            }
          >
            <ul className="list-group list-group-flush">
              {currentProduct?.map((item, n) => {
                return (
                  <li className="list-group-item">
                    <img
                      src={item.image}
                      width="100"
                      height="100"
                      className="me-3 rounded"
                      alt="product"
                    />
                    <div className="flex-grow-1">
                      <h5 className="mb-1">{item.title}</h5>
                      <p className="mb-1 fw-medium ">
                        Final price: $
                        <span className="text-decoration-underline">
                          {item.finalPrice}
                        </span>
                      </p>
                      <p className="mb-1">Quantity: {item.quantity}</p>
                      <p className="mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-truck m-1 mt-0"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                        </svg>
                        Free Delivery: Available
                      </p>
                    </div>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove from Cart
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="container-subtotal t-1 m-5 p-5 w-25 bg-light">
          <p>
            Subtotal ({returnCount()}):{" "}
            <span className="fw-medium">${returnSubtotal()}</span>{" "}
          </p>
          <button className="btn btn-success w-100 m-2">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
