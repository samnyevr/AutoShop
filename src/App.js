import React, { Component} from "react";
import {hot} from "react-hot-loader";

import { HeaderContainer, NavbarContainer, ReviewContainer, ScheduleContainer, ServicesContainer, TiresContainer } from "./containers";

const App = () => {
    return (
        <div>
            <NavbarContainer></NavbarContainer>
            <HeaderContainer></HeaderContainer>
            <ServicesContainer></ServicesContainer>
            <TiresContainer></TiresContainer>
            <ScheduleContainer></ScheduleContainer>
            <ReviewContainer></ReviewContainer>
        </div>
    );
}

export default hot(module)(App);