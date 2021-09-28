import React from "react";
import {Header} from "../components";

export default function HeaderContainer({children}) {
    return (
        <Header>
            {children}
            <Header.Title>Hector's Tire</Header.Title>
            <Header.SubTitle>The Best Tire for Your Vehicles</Header.SubTitle>
            <Header.Text>Call or stop by Today for free estimation</Header.Text>
            <Header.CTA>Call</Header.CTA>
            <Header.CTA>Appointment</Header.CTA> 
        </Header>
    );
}