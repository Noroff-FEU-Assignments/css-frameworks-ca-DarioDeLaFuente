import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container fluid className="p-0">
        <Navbar.Brand className="px-4" href="/">
          The YAY Company
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="px-4" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 gap-3" navbarScroll>
            <NavLink className="navbar-a-toggler py-2 px-5" to="/">
              Home
            </NavLink>
            <NavLink className="navbar-a-toggler py-2 px-5" to="/news">
              News
            </NavLink>
            <NavLink className="navbar-a-toggler  py-2 px-5" to="/contact">
              Contact
            </NavLink>
          </Nav>
          <Form className="d-flex my-2 px-4">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-0 rounded-0 rounded-start"
              aria-label="Search"
            />
            <Button variant="secrch-secondary" className="secrch-secondary rounded-0 rounded-end">
              Go
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
