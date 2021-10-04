import React, { Component} from "react";
import {hot} from "react-hot-loader";

import { HeaderContainer, NavbarContainer, ServicesContainer } from "./containers";

const App = () => {
    return (
        <div>
            <NavbarContainer></NavbarContainer>
            <HeaderContainer></HeaderContainer>
            <ServicesContainer></ServicesContainer>
        </div>
    );
}

export default hot(module)(App);