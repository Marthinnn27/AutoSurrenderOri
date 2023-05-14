import { Col, Container, Row, Button } from "react-bootstrap"

const IntroTrs = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="titletrs">TOURS</div>
        
            <h2 className="titleh2">Find Your Destination By Searching It</h2>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default IntroTrs