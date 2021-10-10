import React from "react";
import {Jumbotron} from "../components";
import {Link} from "react-scroll";

export default function HeaderContainer({children}) {
    return (
        <Jumbotron id="home">
            <Jumbotron.Container>
                {children}
                <Jumbotron.Title>Hector's Tire</Jumbotron.Title>
                <Jumbotron.SubTitle>The Best Tire for Your Vehicles</Jumbotron.SubTitle>
                <Jumbotron.Text>Call or stop by Today for free estimation</Jumbotron.Text>
                <Jumbotron.ButtonWrap>
                    <Jumbotron.CTA>Call</Jumbotron.CTA>
                    <Link 
                        activeClass="active" 
                        to="schedule"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <Jumbotron.CTA id="JumboAppointment">Appointment</Jumbotron.CTA> 
                    </Link>
                </Jumbotron.ButtonWrap>
            </Jumbotron.Container>
        </Jumbotron>
    );
}