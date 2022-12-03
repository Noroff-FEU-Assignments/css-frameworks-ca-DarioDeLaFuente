import React from "react";
import TabsExample from "../Tabs";
import Container from "react-bootstrap/Container";
import CarouseExample from "../Carousel";
import Footer from "../Footer";
import TextExample from "../TextExample";
import TitleExample from "../TitleExample";

function Home() {
  return (
    <>
      <div className="wrapper">
        <CarouseExample></CarouseExample>
        <Container fluid className="container">
          <TitleExample name="We do YAY things"></TitleExample>
          <TextExample></TextExample>
        </Container>
        <TabsExample></TabsExample>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
