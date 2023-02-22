import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import {Link} from "@nextui-org/react";
export const Card6 = () => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Course
        </Text>
        <Text h3 color="white">
          Genomics and Bioinformatics
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="assets/bioCardf.png"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>

        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary">
                <Link href="/gbs">
              <Text
                css={{ color: "green" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                More Info
              </Text>
              </Link>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);