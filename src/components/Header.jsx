import { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import flowerLogo from "../resources/flowerLogo.png";
import { Link } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";

const Header = () => {
  const { totalQuantity, computeCartTotals } = useContext(ProductsContext);

  useEffect(() => {
    computeCartTotals();
  }, [totalQuantity, computeCartTotals]);

  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <img
            src={flowerLogo}
            alt="Logo not loaded."
            style={{ height: "2.5em", width: "6em" }}
            className="me-auto"
          />
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>

          <Link to="/login">
            <i className="bi bi-person-circle me-2">
              <i className="bi bi-caret-down-fill"></i>
            </i>
          </Link>

          <Link to="/cart">
            <i className="bi bi-cart-fill ms-2 ps-0">
              <span
                className="badge bg-secondary rounded-circle"
                style={{
                  fontSize: "10px",
                  position: "relative",
                  top: "-12px",
                  left: "-6px",
                }}
              >
                {totalQuantity}
              </span>
            </i>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
