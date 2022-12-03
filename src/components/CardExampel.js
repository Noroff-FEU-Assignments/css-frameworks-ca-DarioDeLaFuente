import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Records from "./records.json";
function CardExampel() {
  return (
    <div>
      {Records &&
        Records.map((record) => {
          return (
            <Card gap={3} className="align-items-center" key={record.id}>
              <Card.Img variant="top" src={record.icon} alt="" />
              <Card.Body>
                <Card.Title>{record.caption}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}

export default CardExampel;
