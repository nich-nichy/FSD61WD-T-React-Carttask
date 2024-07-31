import React from "react";

const Card = ({ item, renderDiscount, renderStar }) => {
  const handleClick = (item, e) => {
    console.log(e);
    console.log(item);
  };
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {item.sale ? (
          <>
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
          </>
        ) : (
          <></>
        )}
        <img className="card-img-top image-size" src={item.image} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{item.title}</h5>
            {item.review ? (
              <>
                <div className="d-flex justify-content-center small text-warning mb-2">
                  {Array(5)
                    .fill(null)
                    .map(() => renderStar())}
                </div>
              </>
            ) : (
              <></>
            )}
            {renderDiscount(item.discount, item)}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {item.mode?.toLowerCase()?.includes("add to cart") ? (
              <>
                <button
                  className="btn btn-outline-dark mt-auto"
                  href="#"
                  onClick={(e) => handleClick(item, e)}
                >
                  Add to cart
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-outline-dark mt-auto"
                  href="#"
                  onClick={(e) => handleClick(item, e)}
                >
                  View options
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
