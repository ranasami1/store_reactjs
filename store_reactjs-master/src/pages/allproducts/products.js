import React, { useContext } from "react";
import "./products.css";
import { Button } from "react-bootstrap";
import { ColorRing } from "react-loader-spinner";
import { AppContext } from "../../App";
import { Card } from "react-bootstrap";

const Allproducts = () => {
  const { cat, filter, value } = useContext(AppContext);
  return (
    <div className="container mt-5">
      <h1 className="text-center">Our Products</h1>
      <div className="filter">
        <p>Filter-_</p>
        {cat?.map((categ) => {
          return (
            <Button
              key={categ}
              onClick={() => {
                filter(categ);
              }}
              id="filterb"
              variant="outline-secondary"
            >
              {categ}
            </Button>
          );
        })}
      </div>
      <div className="item d-flex flex-wrap align-items-center justify-content-center">
        {value ? (
          value.map((card) => {
            return (
              <Card style={{ width: "14rem", margin: "10px" }} className="card">
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
                  <Button variant="outline-secondary" type="submit">
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        )}
      </div>
    </div>
  );
};
export default Allproducts;
