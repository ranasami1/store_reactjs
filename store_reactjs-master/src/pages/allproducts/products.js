import React, { useContext } from "react";
import "./products.css";
import { Button, Card } from "react-bootstrap";
import { ColorRing } from "react-loader-spinner";
import { AppContext } from "../../App";

const Allproducts = () => {
  const { cat, filter, value, addToCart, loading } = useContext(AppContext);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Our Products</h1>

      {/* Filter Buttons */}
      <div className="filter mb-4 text-center">
        <p>Filter:</p>
        {cat?.map((categ) => (
          <Button
            key={categ}
            onClick={() => filter(categ)}
            id="filterb"
            variant="outline-secondary"
            className="m-1"
          >
            {categ}
          </Button>
        ))}
      </div>

      {/* Products or Loader */}
      <div className="item d-flex flex-wrap align-items-center justify-content-center">
        {loading ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        ) : value.length > 0 ? (
          value.map((card) => (
            <Card
              style={{ width: "280px", margin: "10px" }}
              className="card"
              key={card.id}
            >
              <Card.Img
                style={{ height: "12rem" }}
                variant="top"
                src={card.image}
              />
              <Card.Body>
                <Card.Title>{card.title.slice(0, 15)}...</Card.Title>
                <Card.Text>
                  {card.description.slice(0, 20)}...
                  <br />
                  {card.price}
                  <span>$</span>
                </Card.Text>
                <Button
                  variant="outline-secondary"
                  type="button"
                  onClick={() => addToCart(card)}
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Allproducts;
