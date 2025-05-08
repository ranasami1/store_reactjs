import React, { useContext} from "react";
import ph from './../../img/20419-removebg-preview.png';
import "./home.css"
import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import {ColorRing} from "react-loader-spinner";
import { AppContext } from "../../App";
import { Card } from "react-bootstrap";

const Head = ()=>{  
    const  {value,addToCart}=useContext(AppContext)
    return(
        <section className="head container my-5">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
            <div>
                        <div className="sec1">
                        <h2>welcome to our store</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a congue dui. Maecenas scelerisque porttitor sollicitudin. Vestibulum euismod eros vel lorem iaculis laoreet. Duis venenatis tincidunt sapien quis malesuada. Morbi vitae facilisis nisl. Ut ornare finibus quam, ac rutrum neque. Donec pharetra porttitor sollicitudin. Aliquam erat volutpat. Vestibulum vehicula vehicula odio in hendrerit.
                        </p>
                        <Link to="/products"><Button variant="outline-secondary">Discover</Button></Link>
                        </div>
                    </div>
                    <div className="img">
                        <img src={ph} alt="sale"/>
                    </div>
            </div>
                    
            <div className="head2">
            <h1 className="text-center">Best Selling</h1>
                <div className="container d-flex flex-wrap align-items-center justify-content-center mt-5 mb-5">
                    {value?value.slice(1,6).map((item) =>{
                        return(
                            <div>
                                <Card style={{ width: "220px",margin :"10px"}} className="card">
                <Card.Img
                  style={{ height: "12rem" }}
                  variant="top"
                  src={item.image}
                />
                <Card.Body>
                  <Card.Title>{item.title.slice(0, 15)}...</Card.Title>
                  <Card.Text>
                    {item.description.slice(0, 20)}...
                    <br />
                    {item.price}
                    <span>$</span>
                  </Card.Text>
                  <Button variant="outline-secondary" type="submit" onClick={()=>addToCart(item)}>
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>

                            </div>
                        );
                    }):<ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />}  
            </div>
            </div>

        </section>
    )
}
export default Head;