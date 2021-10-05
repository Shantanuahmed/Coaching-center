import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import { Row } from 'react-bootstrap'
const About = (props) => {

    const [teacher, setTeacher] = useState([])

    useEffect(() => {
        fetch('./teacher.JSON')
            .then(res => res.json())
            .then(data => setTeacher(data))
    }, [])

    return (
        <div>
            <h1>Our Teacher's panel</h1>
            <br />
            <Row xs={1} md={3} className="g-4">
                {
                    teacher.map(teach => <Teacher

                        teach={teach}
                    ></Teacher>)
                }
            </Row>
        </div>

    );
};

export default About;

