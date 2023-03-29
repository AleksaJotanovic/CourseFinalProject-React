import { React, useEffect, useState } from "react";
import category1 from "../resources/category/category1.png";
import category2 from "../resources/category/category2.png";
import category3 from "../resources/category/category3.png";
import category4 from "../resources/category/category4.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import Category from "./Category";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const [_products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const filter = searchParams.get("filter");
    switch (filter) {
      case "simpathy":
        let filteredSimpathy = products.filter(
          (prod) => prod.category === filter
        );
        setProducts(filteredSimpathy);
        break;
      case "anniversary":
        let filteredAnniversary = products.filter(
          (prod) => prod.category === filter
        );
        setProducts(filteredAnniversary);
        break;
      case "congratulations":
        let filteredCongratulations = products.filter(
          (prod) => prod.category === filter
        );
        setProducts(filteredCongratulations);
        break;
      case "getwell":
        let filteredGetwell = products.filter(
          (prod) => prod.category === filter
        );
        setProducts(filteredGetwell);
        break;
      default:
        setProducts([]);
    }
  }, [searchParams, products, setProducts]);

  return (
    <>
      <div className="container-fluid mt-2">
        <div className="row justify-content-center mx-auto gap-md-5 gap-lg-4">
          <div
            className="col-3 col-md-2 col-lg-2 text-center"
            onClick={() => {
              navigate({
                pathname: "/shop/category",
                search: "?filter=simpathy",
              });
            }}
          >
            <p>Simpathy</p>
            <img
              src={category1}
              style={{ width: "5em", height: "6em" }}
              className="border-bottom border-danger"
              alt="Not loaded..."
            />
          </div>

          <div
            className="col-3 col-md-2 col-lg-2 text-center"
            onClick={() => {
              navigate({
                pathname: "/shop/category",
                search: "?filter=anniversary",
              });
            }}
          >
            <p>Anniversary</p>
            <img
              src={category2}
              style={{ width: "5em", height: "6em" }}
              className="border-bottom border-danger"
              alt="Not loaded..."
            />
          </div>

          <div
            className="col-3 col-md-2 col-lg-2 text-center"
            onClick={() => {
              navigate({
                pathname: "/shop/category",
                search: "?filter=congratulations",
              });
            }}
          >
            <p>Congratulations</p>
            <img
              src={category3}
              style={{ width: "5em", height: "6em" }}
              className="border-bottom border-danger"
              alt="Not loaded..."
            />
          </div>

          <div
            className="col-3 col-md-2 col-lg-2 text-center"
            onClick={() => {
              navigate({
                pathname: "/shop/category",
                search: "?filter=getwell",
              });
            }}
          >
            <p>Getwell</p>
            <img
              src={category4}
              style={{ width: "5em", height: "6em" }}
              className="border-bottom border-danger"
              alt="Not loaded..."
            />
          </div>
        </div>
      </div>
      <Category products={_products} />
    </>
  );
};

export default Shop;
