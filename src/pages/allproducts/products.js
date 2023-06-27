import React from "react";
import PCard from "../../component/cardC/card";
import { useEffect,useState } from "react";
import "./products.css"
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