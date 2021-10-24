import React from "react";
import { Navbar, Nav, Container,Form,FormControl,Button} from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
export const Navigation = () => {
  return (
    <Navbar>
      <Container className="outline">
        <Navbar.Brand href="home">PDFs</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="about">About Us</Nav.Link>
          <Nav.Link href="categories">Categories</Nav.Link>
          <Nav.Link href="contribute">Contribute</Nav.Link>
          
     <a href="login"> <FaUserAlt className="login-icon"/></a>
        </Nav>
      </Container>
    </Navbar>
  );
};
