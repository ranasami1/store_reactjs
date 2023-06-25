import React, { useEffect, useState } from "react";
import ph from './../img/20419.jpg'
import "./home.css"
import { Button} from "react-bootstrap";
import PCard from "../component/Header/card";
const Head = ()=>{
    const  [value,setValue] = useState([]);
    const url ="https://fakestoreapi.com/products"
    useEffect(() =>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setValue(data));
    }, []);
    return(
        <section className="head">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 sec1">
                        <h2>welcome to our store</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a congue dui. Maecenas scelerisque porttitor sollicitudin. Vestibulum euismod eros vel lorem iaculis laoreet. Duis venenatis tincidunt sapien quis malesuada. Morbi vitae facilisis nisl. Ut ornare finibus quam, ac rutrum neque. Donec pharetra porttitor sollicitudin. Aliquam erat volutpat. Vestibulum vehicula vehicula odio in hendrerit.
                        </p>
                        <Button variant="outline-secondary">Discover</Button>
                    </div>
                    <div className="col-md-6 sec2">
                        <img src={ph} alt="sale"/>
                    </div>
                </div>
            </div>
            <div className="head2">
                <div className="row">
                    <h1 className="text-center">Best Selling</h1>
                    {value.slice(1,5).map((card) =>{
                        return(
                            <div className="col-3">
                                <PCard card={card}/>
                            </div>
                        );
                    })}
            
            </div>
            </div>

        </section>
    )
}
export default Head;