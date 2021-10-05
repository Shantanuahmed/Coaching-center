import React from 'react';
import { Card, Col } from 'react-bootstrap'
const Teacher = (props) => {
  const { name, Qualification, picture, subject } = props.teach
  return (
    <div>
      <Col>
        <Card>
          <Card.Img height="250px" src={picture} />
          <Card.Body className="bg-secondary">
            <Card.Title className="text-info">Name: {name}</Card.Title>
            <h3 className="text-info">Specialised in: <span className="text-warning fw-bold">{subject}</span></h3>
            <h5 className="text-info">Qualification: <span className="text-warning">{Qualification}</span></h5>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Teacher;