import React from "react";

import {Card} from "../components";

export default function CardContainer({children}) {
    return <Card>
        <Card.Item>
            <Card.Profile src="../images/tire.png"></Card.Profile>
            <Card.Text>
                Great Services, will recommend
                <Card.Name>-John Doe</Card.Name>
            </Card.Text>
            <Card.Rating>5 Stars</Card.Rating>
        </Card.Item>
        <Card.Item>
            <Card.Profile src="../images/tire.png"></Card.Profile>
            <Card.Text>
                Great Services, will recommend
                <Card.Name>-John Doe</Card.Name>
            </Card.Text>
            <Card.Rating>5 Stars</Card.Rating>
        </Card.Item>
        <Card.Item>
            <Card.Profile src="../images/tire.png"></Card.Profile>
            <Card.Text>
                Great Services, will recommend
                <Card.Name>-John Doe</Card.Name>
            </Card.Text>
            <Card.Rating>5 Stars</Card.Rating>
        </Card.Item>
    </Card>
}