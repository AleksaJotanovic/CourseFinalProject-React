import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";

const Product = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { getProductById, products, orderTheProduct } =
    useContext(ProductsContext);

  const [product, setProduct] = useState({
    id: 0,
    category: "",
    title: "",
    price: "",
    quantity: 0,
    description: "",
    photo: "",
  });

  useEffect(() => {
    const currentProduct = getProductById(Number(productId));
    if (currentProduct) {
      setProduct(currentProduct);
    }
  }, [productId, getProductById]);

  const nextProduct = () => {
    let nextId = product.id + 1;
    navigate(`/shop/category/${nextId}`);
    if (nextId > products.length) {
      navigate(`/shop/category/${products[0].id}`);
    }
  };

  const previousProduct = () => {
    let previousId = product.id - 1;
    navigate(`/shop/category/${previousId}`);
    if (previousId < products[0].id) {
      navigate(`/shop/category/${products.length}`);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand pb-0">
        <div className="container-fluid">
          <p>{window.location.pathname.replace(/[0-9]+/g, product.title)}</p>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className="nav-link btn btn-sm btn-outline"
                  onClick={previousProduct}
                >
                  {"<prev"}
                </button>
              </li>
              <li className="nav-item">
                <p className="nav-link">|</p>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-sm btn-outline"
                  onClick={nextProduct}
                >
                  {"next>"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-sm">
        <div className="row">
          <div className="col-lg-6 text-lg-center ps-lg-5">
            <img
              className="ms-lg-5"
              src={product.photo}
              alt="Product not loaded..."
              style={{ width: "20em", height: "20em" }}
            />
          </div>
          <div className="col-lg-6">
            <div>
              <h5>{product.title}</h5>
              <h6>{product.price}$</h6>
              <p>{product.description}</p>
              <hr />
              <label className="form-label">Quantity</label>
              <input
                type="number"
                className="form-control form-control-sm shadow-sm rounded-1 mb-2"
                style={{ width: "6.2em" }}
                value={product.quantity}
                onChange={(e) =>
                  setProduct({ ...product, quantity: e.target.value })
                }
              />
              <button
                type="button"
                className="btn btn-sm btn-dark rounded-1 mb-5"
                onClick={() => orderTheProduct(product.id, product.quantity)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
