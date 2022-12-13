import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleExample from "../TitleExample";
import CardExampel from "../CardExampel";
import Footer from "../Footer";

function News() {
  return (
    <>
      <div className="wrapper">
        <Container>
          <Row>
            <Col xs={12}>
              <TitleExample name="NEWS"></TitleExample>
            </Col>
          </Row>
          <Row className="justify-content-md-center p-2 ">
            <CardExampel></CardExampel>
          </Row>
        </Container>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default News;
