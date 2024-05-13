import React from "react";
import PCard from "../../component/cardC/card";
import { useEffect,useState } from "react";
import "./products.css"
import { Button } from "react-bootstrap";
const Allproducts = ({addtocart,counter}) =>{
    const  [value,setValue] = useState([]);
    const  [cat,setCat] = useState([]);
    const url ='https://fakestoreapi.com/products';

    const getall = () => {
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>setValue(data));
   }

    const getcat = () => {
    fetch(`${url}/categories`)
    .then((res)=>res.json())
    .then((data)=>setCat(data));
   };

   const filter = (catName) => {
    console.log(catName);
    fetch(`${url}/category/${catName}`)
            .then((res)=>res.json())
            .then((data)=>setValue(data));
   };
   useEffect(() =>{
    getall();
    getcat();
   },[])
 
    return(
    <div className="container mt-5">
        <h1 className="text-center">Our Products</h1>
        <div className="filter">
            <p>Filter-_</p>
            {cat.map((categ)=>{
                return(
                    <Button key={cat.id} onClick={() => {filter(categ)
                    }} id="filterb"variant="outline-secondary">{categ}</Button>

                )
            })}
        </div>
        <div className="item d-flex flex-wrap align-items-center justify-content-center">       
        {value.map((card) =>{
                        return(
                            <div className="m-3">
                                <PCard card={card} addtocart={addtocart} key={value.id} counter={counter}/>
                            </div>
                        );
                    })}  
        </div>       
        </div>
    );
}
export default Allproducts