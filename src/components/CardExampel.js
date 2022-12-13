import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Records from "./records.json";
import Pagination from "react-bootstrap/Pagination";
function CardExampel() {
  const rowsPerPage = 20;
  const rows = Records.length;
  const lastPage = Math.ceil(rows / rowsPerPage);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [showedData, showData] = React.useState(Records.slice(0, rowsPerPage));

  const handleClick = (page) => {
    setCurrentPage(page);
    const pageIndex = page - 1;
    const firstIndex = pageIndex * rowsPerPage;
    const lastIndex = pageIndex * rowsPerPage + rowsPerPage;
    showData(Records.slice(firstIndex, lastIndex));
  };

  return (
    <>
      <Pagination>
        {(() => {
          let array = [];
          for (let i = 1; i <= lastPage; i++) {
            array.push(
              <Pagination.Item key={i} active={i === currentPage} onClick={() => handleClick(i)}>
                {i}
              </Pagination.Item>
            );
          }
          return array;
        })()}
      </Pagination>

      {Records &&
        showedData.map((record) => {
          return (
            <Col md={3}>
              <Card gap={3} className="align-items-center" key={record.id}>
                <Card.Img variant="top" src={record.icon} alt="" />
                <Card.Body>
                  <Card.Title>{record.caption}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </Card.Text>
                  <ButtonGroup variant="primary " className="card-btn">
                    <Button className="card-label-btn">MORE</Button>
                    <Button variant="secondary" className="card-label-btn-right"></Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      <Pagination>
        {(() => {
          let array = [];
          for (let i = 1; i <= lastPage; i++) {
            array.push(
              <Pagination.Item key={i} active={i === currentPage} onClick={() => handleClick(i)}>
                {i}
              </Pagination.Item>
            );
          }
          return array;
        })()}
      </Pagination>
    </>
  );
}

export default CardExampel;
