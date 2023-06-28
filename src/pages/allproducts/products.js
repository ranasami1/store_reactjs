import React from "react";
import PCard from "../../component/cardC/card";
import { useEffect,useState } from "react";
import "./products.css"
import { Button } from "react-bootstrap";
const Allproducts = () =>{
    const  [value,setValue] = useState([]);
    const  [cat,setCat] = useState([]);
    const [cart,setCart] = useState([]);
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
   const addtocart = (card) =>{
    cart.push(card);
    localStorage.setItem("card",JSON.stringify(cart));
    console.log(localStorage)
    
   }
   useEffect(() =>{
    getall();
    getcat();
   },[])
 
    return(
    <div className="container prod">
        <div className="row">
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
        
                    {value.map((card) =>{
                        return(
                            <div className="col-3" key={card.id}>
                                <PCard card={card} addtocart={addtocart}  />
                            </div>
                        );
                    })}  
        </div>
    </div>
    );
}
export default Allproducts