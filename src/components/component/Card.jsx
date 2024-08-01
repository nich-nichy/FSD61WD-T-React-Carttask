import { useState } from "react";
import Modal from "./Model";

const Card = ({
  item,
  renderDiscount,
  renderStar,
  currentProduct,
  setCurrentProduct,
}) => {
  const addToCart = (product, e) => {
    setCurrentProduct((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item, e) => {
    setCurrentProduct((prev) =>
      prev
        .map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  const isInCart = currentProduct?.some(
    (product) => product.id === item.id && product.quantity > 0
  );
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          {item.sale && (
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
          )}
          <img className="card-img-top image-size" src={item.image} alt="..." />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{item.title}</h5>
              {item.review && (
                <div className="d-flex justify-content-center small text-warning mb-2">
                  {Array(5)
                    .fill(null)
                    .map(() => renderStar())}
                </div>
              )}
              {renderDiscount(item.discount, item)}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <>
                {isInCart ? (
                  <button
                    className="btn btn-outline-dark mt-auto"
                    href="#"
                    onClick={(e) => removeFromCart(item, e)}
                  >
                    Remove from cart
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-dark mt-auto"
                    href="#"
                    onClick={(e) => addToCart(item, e)}
                  >
                    Add to cart
                  </button>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
