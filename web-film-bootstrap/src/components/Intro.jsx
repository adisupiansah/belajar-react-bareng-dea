import { Container, Row, Col, Button } from "react-bootstrap";

export default function Intro() {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center text-center">
        <Row>
          <Col>
              <div className="title">SAKSIKAN FILM FILM</div>
              <div className="title">TERSERU LAINNYA</div>
              <div className="introButton mt-4 text-center">
                <Button variant="dark">Lihat semua list</Button>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
