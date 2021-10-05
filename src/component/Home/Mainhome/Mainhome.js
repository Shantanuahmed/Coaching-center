import React from 'react';
import { Card, Col } from 'react-bootstrap'

const Mainhome = (props) => {

  const { servicePrice, picture, service } = props.home
  return (
    <div >
      <Col>
        <Card>
          <Card.Img variant="top " width="250px" height="250px" src={picture} />
          <Card.Body className="bg-secondary">
            <h3 className="text-white">{service}</h3>
            <h2 className="text-white">Charge: {servicePrice}</h2>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Mainhome;