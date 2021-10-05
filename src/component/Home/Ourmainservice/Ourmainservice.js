import React from 'react';
import { Card, Col } from 'react-bootstrap'

const Ourmainservice = (props) => {

  const { name, servicePrice, picture } = props.ourservice;
  return (

    <div>
      <Col>
        <Card>
          <Card.Body>
            <h2 className="text-info">{name}</h2>
            <Card.Img variant="top w-100" width='200px' height='200px' src={picture} />
            <h5 className="m-3 text-success"> Course fee: BDT.{servicePrice}</h5>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Ourmainservice;