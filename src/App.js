import { useState } from 'react'
import Header from './components/Header'
import Records from './components/Records'
import ShowModal from './components/ShowModal'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Row, Card, Col, Stack } from 'react-bootstrap'



function App() {
  const [modalShow, setModalShow] = useState(false);

  const [records, setRecords] = useState([
    {
        id: 1,
        name: 'John Doe',
        gender: 'Male',
        created_at: '10-03-2021'
    },
    {
        id: 2,
        name: 'James Wilson',
        gender: 'Male',
        created_at: '10-03-2021'
    },
    {
        id: 3,
        name: 'Catherin Garret',
        gender: 'Female',
        created_at: '10-03-2021'
    },
  ])

  return (

    <Container>
                  <Header />

      <Row className="justify-content-center">
        <Col sm={12} md={6} lg={8}>
          <Card>
            <Card.Header>
              Crud Operations
            </Card.Header>
            <Card.Body>
              <Stack direction="horizontal" gap={3}>
                <div className="bg-light">First Element</div>
                <div className="bg-light ms-auto">Second Element</div>
                <div className="bg-light"><Button onClick={() => setModalShow(true)}>Add New</Button></div>
              </Stack>
            <Records records={records}/>
            <ShowModal 
            show={modalShow} 
            onHide={() => setModalShow(false)} 
            />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}



export default App;
