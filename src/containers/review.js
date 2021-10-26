import React from "react";

import {Card} from "../components";

export default function CardContainer({children}) {
    return <Card>
        <Card.Title>What our Customers Say</Card.Title>
        <Card.Item>
            <Card.Profile src="https://res.cloudinary.com/dsp40oobl/image/upload/v1635018214/Autoshop/tire_lze3ck.png"></Card.Profile>
            <Card.Text>
                Great Services, will recommend
                <Card.Name>-John Doe</Card.Name>
            </Card.Text>
            <Card.Rating>5 Stars</Card.Rating>
        </Card.Item>
        <Card.Item>
            <Card.Profile src="https://res.cloudinary.com/dsp40oobl/image/upload/v1635018214/Autoshop/tire_lze3ck.png"></Card.Profile>
            <Card.Text>
                Great Services, will recommend
                <Card.Name>-John Doe</Card.Name>
            </Card.Text>
            <Card.Rating>5 Stars</Card.Rating>
        </Card.Item>
        <Card.Item>
            <Card.Profile src="https://res.cloudinary.com/dsp40oobl/image/upload/v1635018214/Autoshop/tire_lze3ck.png"></Card.Profile>
            <Card.Text>
                Great Services, will recommend
                <Card.Name>-John Doe</Card.Name>
            </Card.Text>
            <Card.Rating>5 Stars</Card.Rating>
        </Card.Item>
    </Card>
}