import { useContext, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const {
    cart,
    subtotal,
    computeCartTotals,
    decrementQuantity,
    incrementQuantity,
    remove,
  } = useContext(ProductsContext);

  useEffect(() => {
    computeCartTotals();
  }, [subtotal, computeCartTotals]);

  const navigate = useNavigate();
  const checkout = () => {
    navigate("/product-order");
  };

  return (
    <>
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => {
            return (
              <div
                key={product.id}
                className="container mt-3 border-bottom pb-1 qty-class"
              >
                <div className="row gap-1">
                  <div
                    style={{ width: "7em", height: "7em", marginRight: "10px" }}
                  >
                    <img
                      src={product.photo}
                      style={{ width: "7em", height: "7em" }}
                      alt="I`m very sorry, but fuck you :)"
                    />
                  </div>
                  <div className="col-3 ps-0">
                    <p>{product.title}</p>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline ps-0"
                      onClick={() => remove(product)}
                    >
                      Remove
                    </button>
                  </div>
                  <nav className="navbar col-11 col-md-6 col-lg-7 ms-3 h-50">
                    <div className="col-2 text-center">{product.price}$</div>
                    <div className="col-2 d-flex justify-content-center">
                      <div className="input-group input-group-sm">
                        <span
                          className="input-group-text btn btn-sm btn-outline"
                          style={{ height: "2em" }}
                          onClick={() => incrementQuantity(product)}
                        >
                          +
                        </span>
                        <p
                          style={{ width: "1em", height: "2em" }}
                          className="form-control form-control-sm shadow-sm rounded-1 text-center"
                        >
                          {product.quantity}
                        </p>
                        <span
                          className="input-group-text btn btn-sm btn-outline"
                          style={{ height: "2em" }}
                          onClick={() => decrementQuantity(product)}
                        >
                          -
                        </span>
                      </div>
                    </div>
                    <div className="col-3 text-center">
                      {product.quantity * product.price}$
                    </div>
                  </nav>
                </div>
              </div>
            );
          })}
          <div className="container d-flex justify-content-end">
            <div className="col-12 col-lg-6 position-relative">
              <div className="m-0">
                <p className="d-inline">Subtotal:</p>
                <p className="d-inline position-absolute end-0">{subtotal}$</p>
              </div>
              <div className="m-0 border-bottom">
                <p className="d-inline">Shipping:</p>
                <p className="d-inline position-absolute end-0">
                  {subtotal < 100 ? 100 : "FREE"}$
                </p>
              </div>
              <div className="m-0">
                <p className="d-inline">Total:</p>
                <p className="d-inline position-absolute end-0">
                  {subtotal < 100 ? subtotal + 100 : subtotal}$
                </p>
              </div>
              <div className="mb-5 pb-3">
                <button
                  className="btn btn-sm btn-dark rounded-1 position-absolute end-0"
                  onClick={checkout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid text-center mt-3">
          <h1>Shopping cart is empty!</h1>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
