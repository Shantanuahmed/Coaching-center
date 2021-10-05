import React, { useEffect, useState } from 'react';
import Mainhome from './Mainhome/Mainhome';
import { Row } from 'react-bootstrap'

const Home = () => {
    const [homes, setHomes] = useState([])

    useEffect(() => {

        fetch('./home.JSON')
            .then(res => res.json())
            .then(data => setHomes(data))
    }, []);

    return (
        <div>
            <h1 className="bg-secondary p-4 m-4 text-white border rounded">Welcome to <span className="text-warning fw-bold">Confidence</span> Coaching center</h1>

            <Row xs={1} md={3} className="g-4">
                {
                    homes.map(home => (<Mainhome

                        home={home}

                    ></Mainhome>

                    ))
                }
            </Row>
        </div>


    );
};

export default Home;