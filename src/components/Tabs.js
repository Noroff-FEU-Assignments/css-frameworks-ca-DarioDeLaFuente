import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

import TextExample from "../components/TextExample";

function TabsExample() {
  return (
    <Container className="tabs-conteiner">
      <Accordion defaultActiveKey="0" className="d-md-none">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
            <Col>
              <img className="d-block w-100" src="images/tab/tab-1.jpg" alt="First slide" />
            </Col>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
            <Col>
              <img className="d-block w-100" src="images/tab/tab-2.jpg" alt="First slide" />
            </Col>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #3</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
            <Col>
              <img className="d-block w-100" src="images/tab/tab-1.jpg" alt="First slide" />
            </Col>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="mb-3 d-none d-md-block container">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Home">
            <Container>
              <Row xs={1} md={2}>
                <Col>
                  <img className="d-block w-100" src="images/tab/tab-1.jpg" alt="First slide" />
                </Col>
                <Col>
                  <TextExample />
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <Container>
              <Row xs={1} md={2}>
                <Col>
                  <img className="d-block w-100" src="images/tab/tab-2.jpg" alt="First slide" />
                </Col>
                <Col>
                  <TextExample />
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <Container>
              <Row xs={1} md={2}>
                <Col>
                  <img className="d-block w-100" src="images/tab/tab-3.jpg" alt="First slide" />
                </Col>
                <Col>
                  <TextExample />
                </Col>
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
}

export default TabsExample;
