import React, { Component} from "react";
import {hot} from "react-hot-loader";

import { FooterContainer, HeaderContainer, NavbarContainer, ReviewContainer, ScheduleContainer, ServicesContainer, TiresContainer } from "./containers";

const App = () => {
    return (
        <div>
            
            <HeaderContainer></HeaderContainer>
            <ServicesContainer></ServicesContainer>
            <TiresContainer></TiresContainer>
            <ScheduleContainer></ScheduleContainer>
            <ReviewContainer></ReviewContainer>
            <FooterContainer></FooterContainer>
        </div>
    );
}

export default hot(module)(App);