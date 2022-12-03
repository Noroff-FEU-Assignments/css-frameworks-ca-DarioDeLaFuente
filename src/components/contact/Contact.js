import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleExample from "../TitleExample";
import TextExample from "../TextExample";
import Footer from "../Footer";
import Forms from "../Forms";

function Contact() {
  return (
    <>
      <div className="wrapper">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <TitleExample name="Submit your details"></TitleExample>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
              <Forms></Forms>
            </Col>
            <Col xs={6} md={4}>
              <TextExample></TextExample>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Contact;
