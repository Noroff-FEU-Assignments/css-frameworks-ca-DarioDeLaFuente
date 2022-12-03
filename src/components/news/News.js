import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleExample from "../TitleExample";
import CardExampel from "../CardExampel";
import Footer from "../Footer";
import PaginationExample from "../PaginationExample";

function News() {
  return (
    <>
      <div className="wrapper">
        <Container>
          <PaginationExample></PaginationExample>
          <Row>
            <Col xs={12}>
              <TitleExample name="NEWS"></TitleExample>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={2}>
              <CardExampel></CardExampel>
            </Col>
            <Col xs={12} md={2}>
              <CardExampel></CardExampel>
            </Col>
            <Col xs={12} md={2}>
              <CardExampel></CardExampel>
            </Col>
            <Col xs={12} md={2}>
              <CardExampel></CardExampel>
            </Col>
            <Col xs={12} md={2}>
              <CardExampel></CardExampel>
            </Col>
          </Row>
          <PaginationExample></PaginationExample>
        </Container>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default News;
