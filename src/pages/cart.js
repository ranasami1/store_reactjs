import "./cart.css";
const CartPage = ({retrieveData,addtocart}) => {
 
  const totalprice = () =>{
    let total = 0;
    retrieveData.map((item) =>(total=total + item.price))
    return total;
  };
  
  
    return(
      <section className="cart">
        <h1 className="text-center">Cart</h1> 
        <div>
        <table>
          <thead>
          <td>
            <tr className="text-center">id</tr>
            <tr className="text-center">product</tr>
            <tr className="text-center">price</tr>
            <tr> </tr>
          </td>
          </thead>
          <tbody >
              {retrieveData !== [ ] ? retrieveData.map((data)=>{
                return(
                  <td>
                  <tr className="text-center">{data.id}</tr>
                  <tr className="text-center"><img src={data.image} style={{width:40}}/>
                  <h6>{data.title}</h6></tr>
                  <tr className="text-center">{data.price} $</tr>
                  <tr className="text-center" ><button id="C" >Delete</button></tr>
                  </td>
                )
              }) : <td>
                <tr> 0</tr>
                <tr> 0</tr>
                <tr> 0</tr>
                <tr>  </tr>
                </td>}
          </tbody>
        </table>
        </div>
        <div className="total">
          <h4 className="text-center border-bottom bg-light">total</h4>
          <div className="container">
            <p className="text-center">{totalprice()}$</p>
            <div className="options">
            <button id="C">Buy now</button>
            </div>
            
          </div>
          
        </div>
      </section>
  );
}
export default CartPage