import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import productsArr from "./productsArr";
import ProductCard from "./productCard";
const StorePage = () => {
  const storeDisplay = productsArr.map((product) => {
    return (
        <Col style={{marginBottom: "1rem"}}>
      <ProductCard
        title={product.title}
        imageUrl={product.imageUrl}
        price={product.price}
      />
      </Col>
    );
  });
  return (
  <div style={{padding: "1rem 3rem"}}>
    <h3 style={{textAlign: "center"}}>The Store</h3>
    <Row>
    {storeDisplay}
    </Row>
  </div>);
};
export default StorePage;
