import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Forms() {
  return (
    <Form className="forum-box">
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">https://</InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Allow us to sell your personal details to whomever we want"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className=" w-100 mx-0 mb-3 submit">
        Submit
      </Button>
    </Form>
  );
}

export default Forms;
