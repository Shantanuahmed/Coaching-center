import React, { useEffect, useState } from 'react';
import Ourmainservice from '../Ourmainservice/Ourmainservice';
import { Row } from 'react-bootstrap'

const OurService = () => {

    const [ourservices, setOurservices] = useState([])

    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setOurservices(data))
    }, [])
    return (
        <div>
            <h2 className="bg-secondary p-2 text-white fw-bold" >Our <span className="text-warning">Special</span> Services</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    ourservices.map(ourservice => <Ourmainservice

                        ourservice={ourservice}
                    ></Ourmainservice>)
                }
            </Row>
        </div>
    );
};

export default OurService;