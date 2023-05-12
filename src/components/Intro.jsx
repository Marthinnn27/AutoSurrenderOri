import { Col, Container, Row, Button } from "react-bootstrap"

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">EXPLORE JAPAN</div>
            <h2 className="titleh2">Your Dream Vacation Awaits</h2>
            <div className="introButton">
              <Button variant="dark" size="lg" style={{ fontWeight: 'bold', fontSize: '20px' }} >DISCOVER</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro
