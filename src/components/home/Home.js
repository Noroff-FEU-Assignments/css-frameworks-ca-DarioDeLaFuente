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
      <div className="wrapper mt-3 pt-5 pb-5">
        <CarouseExample></CarouseExample>
        <Container className="p-4">
          <TitleExample name="We do YAY things"></TitleExample>
          <TextExample></TextExample>
        </Container>
        <TabsExample className=""></TabsExample>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
