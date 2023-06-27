import React from "react";
import PCard from "../../component/cardC/card";
import { useEffect,useState } from "react";
import "./products.css"
import { Button } from "react-bootstrap";
const Allproducts = () =>{
    const  [value,setValue] = useState([]);
    const url ="https://fakestoreapi.com/products"
    useEffect(() =>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setValue(data));
    }, []);
    return(
    <div className="container prod">
        <div className="row">
        <h1 className="text-center">Our Products</h1>
        <div className="filter">
            <p>Filter-_</p>
        <Button id="filterb"variant="outline-secondary">all products</Button>
        <Button id="filterb"variant="outline-secondary">Men</Button>
        <Button id="filterb"variant="outline-secondary">Women</Button>
        <Button id="filterb"variant="outline-secondary">Jewelery</Button>
        <Button id="filterb"variant="outline-secondary">Electronics</Button></div>
        
                    {value.map((card) =>{
                        return(
                            <div className="col-3" key={value.id}>
                                <PCard card={card}/>
                            </div>
                        );
                    })}  
        </div>
    </div>
    );
}
export default Allproducts