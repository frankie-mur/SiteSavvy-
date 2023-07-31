import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IG from '../performer_images/345620009757-R1-016-6A.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Performers() {
  return (<>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
    <div id="performer section">
      <h1> Performers</h1>
      <h3 className="mb-5 center-align" >MC's</h3>
      <Container>
        <Row className="pl-4">
          <Col>
            <Card className="mb-5" >
              <Card.Img variant="top" src={IG} />
              <Card.Body>
                <Card.Title>Sean Wallace</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make u the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button> 
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-5">
              <Card.Img variant="top" src={IG} />
              <Card.Body>
                <Card.Title>IG</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make u the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button> 
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-5">
              <Card.Img variant="top" src={IG} />
              <Card.Body>
                <Card.Title>MC Ghost</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make u the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button> 
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
        <Row className="mb-5">
        <h3>Dancers</h3>
        <Card>
          <Card.Img variant="top" src={IG} />
          <Card.Body>
            <Card.Title>Cardi Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make u the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button> 
          </Card.Body>
        </Card>
      </Row>
    </div>
    </>
    );
}

export default Performers;