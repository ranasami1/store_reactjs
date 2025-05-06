import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./card.css";
import Swal from 'sweetalert2';

function PCard({card,addtocart, counter}) {
  const {image,title,description,price} = card;
  const ask =()=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Added to cart',
      showConfirmButton: false,
      timer: 1500
    })
  }
  const actions = ()=>{
    ask();
    addtocart(card,counter);
    counter();
    
  }
  return (
    <Card style={{width: '14rem',margin:'10px'}} className='card'>
      <Card.Img style={{ height: '12rem'}} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title.slice(0,15)}...</Card.Title>
        <Card.Text>
         {description.slice(0,20)}...
         <br/>
         {price}<span>$</span>
        </Card.Text>
        <Button onClick={()=> actions()} variant="outline-secondary" type="submit">Add to cart</Button>
      </Card.Body>
    </Card>
    
  );
}

export default PCard;