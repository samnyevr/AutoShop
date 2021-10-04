import React, { Component} from "react";
import {hot} from "react-hot-loader";

import { HeaderContainer, NavbarContainer, ServicesContainer, TiresContainer } from "./containers";

const App = () => {
    return (
        <div>
            <NavbarContainer></NavbarContainer>
            <HeaderContainer></HeaderContainer>
            <ServicesContainer></ServicesContainer>
            <TiresContainer></TiresContainer>
        </div>
    );
}

export default hot(module)(App);