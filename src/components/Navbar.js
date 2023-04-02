import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
    <Container>
      <Nav className="justify-content-center"  style={{marginLeft: "22rem"}}>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/store">Store</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>
      <Button variant="primary">
          Cart <Badge bg="secondary">0</Badge>
          <span className="visually-hidden">cart-items</span>
        </Button>
      </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
