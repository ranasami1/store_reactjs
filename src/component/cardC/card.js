import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./card.css";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Counter from '../counter/counter';
const ask =()=>{
  Swal.fire({
    title:"add to cart or continue shoping?",
    confirmButtonText:"Add to cart",
    showCancelButton:true,
    cancelButtonText:"Continue"
  }).then((data)=>{
    if(data.isConfirmed){
     return(
      <Counter />
       
     )
    }
  })
 
}

function PCard(props) {
  console.log(props);
  return (
    <Card style={{ maxWidth: '14rem'}} className='card'>
      <Card.Img style={{ height: '12rem'}} variant="top" src={props.card.image} />
      <Card.Body>
        <Card.Title>{props.card.title.slice(0,15)}...</Card.Title>
        <Card.Text>
         {props.card.description.slice(0,20)}...
         <br/>
         {props.card.price}<span>$</span>
        </Card.Text>
        <Link onClick={()=>ask()}><Button variant="outline-secondary">Add to cart</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default PCard;