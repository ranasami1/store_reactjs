import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PCard(props) {
  console.log(props);
  return (
    <Card style={{ maxWidth: '14rem'}}>
      <Card.Img style={{ height: '12rem'}} variant="top" src={props.card.image} />
      <Card.Body>
        <Card.Title>{props.card.title.slice(0,15)}</Card.Title>
        <Card.Text>
         {props.card.description.slice(0,20)}
        </Card.Text>
        <Button variant="outline-secondary">Details</Button>
      </Card.Body>
    </Card>
  );
}

export default PCard;