import React from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
  return (
    <section style={{ paddingBottom: "2em", marginTop: "1em" }}>
      <div className="row w-100 mx-auto text-center justify-content-center">
        {props.products.map((product, index) => {
          return (
            <div key={index} className="col-4 mb-3" style={{ width: "18em" }}>
              <Link to={`/shop/category/${product.id}`}>
                <img
                  src={product.photo}
                  alt="Not loaded..."
                  style={{ width: "15em", height: "15em" }}
                />
              </Link>
              <p className="mb-0 fw-bold">{product.title}</p>
              <em>{product.price}$</em>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
