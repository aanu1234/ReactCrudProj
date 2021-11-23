import { Modal, Button, Alert, Form } from "react-bootstrap"

const ShowModal = (props) => {

  return (
    <>  
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="info">Response here</Alert>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Fullname" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Select aria-label="Default select example" >
                <option value="">Choose Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
            </Form.Group>
          </Form>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
  
export default ShowModal