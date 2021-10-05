import React from "react";
import {Jumbotron} from "../components";

export default function HeaderContainer({children}) {
    return (
        <Jumbotron>
            <Jumbotron.Container>
                {children}
                <Jumbotron.Title>Hector's Tire</Jumbotron.Title>
                <Jumbotron.SubTitle>The Best Tire for Your Vehicles</Jumbotron.SubTitle>
                <Jumbotron.Text>Call or stop by Today for free estimation</Jumbotron.Text>
                <Jumbotron.ButtonWrap>
                    <Jumbotron.CTA>Call</Jumbotron.CTA>
                    <Jumbotron.CTA>Appointment</Jumbotron.CTA> 
                </Jumbotron.ButtonWrap>
            </Jumbotron.Container>
        </Jumbotron>
    );
}