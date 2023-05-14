import { Card, Container, Row, Col, Image } from "react-bootstrap"
import skytreeimage from "../assets/images/trending/skytree.jpg"
import disneylandimage from "../assets/images/trending/disneyland.jpg"
import osakaimage from "../assets/images/trending/osaka.jpg"
import shrineimage from "../assets/images/trending/shrine.jpg"
import arashiyamaimage from "../assets/images/trending/arashiyama.jpg"
import fujimountainimage from "../assets/images/trending/fujimountain.jpg"

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="recom">TRENDING PLACES</h1>
        <br />
        <Row>
          <Col md={4} className="Wrapper" id="trending">
            <Card className="Image">
              <Image src={skytreeimage} alt="trendingplaces" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Tokyo Skytree</Card.Title>
                  <Card.Text className="text-left">
                    Tokyo City
                  </Card.Text>
                  <Card.Text className="text-left">
                    Rated 4,5/5
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="Wrapper">
            <Card className="Image">
              <Image
                src={disneylandimage}
                alt="trendingplaces"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    DisneyLand
                  </Card.Title>
                  <Card.Text className="text-left">
                    Tokyo City
                  </Card.Text>
                  <Card.Text className="text-left">
                    Rated 4,5/5
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="Wrapper">
            <Card className="Image">
              <Image src={osakaimage} alt="trendingplaces" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Osaka Palace</Card.Title>
                  <Card.Text className="text-left">
                    Tokyo City
                  </Card.Text>
                  <Card.Text className="text-left">
                    Rated 4,5/5
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="Wrapper">
            <Card className="Image">
              <Image src={shrineimage} alt="trendingplaces" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Fushimi Inari Shrine</Card.Title>
                  <Card.Text className="text-left">
                    Osaka
                  </Card.Text>
                  <Card.Text className="text-left">
                    Rated 4,5/5
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="Wrapper">
            <Card className="Image">
              <Image
                src={arashiyamaimage}
                alt="trendingplaces"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Arashiyama</Card.Title>
                  <Card.Text className="text-left">
                    Kyoto
                  </Card.Text>
                  <Card.Text className="text-left">
                    Rated 4,5/5
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="Wrapper">
            <Card className="Image">
              <Image src={fujimountainimage} alt="trendingplaces" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Fuji Mountain</Card.Title>
                  <Card.Text className="text-left">
                    Tokyo City
                  </Card.Text>
                  <Card.Text className="text-left">
                    Rated 4,5/5
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Trending
