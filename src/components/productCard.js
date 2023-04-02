import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {`Rs: ${props.price}`}
        </Card.Text>
        <Button variant="primary" onClick={props.addToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;