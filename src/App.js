import React, { Component} from "react";
import {hot} from "react-hot-loader";

import { HeaderContainer, NavbarContainer } from "./containers";

const App = () => {
    return (
        <div>
            <HeaderContainer>
                <NavbarContainer></NavbarContainer>
            </HeaderContainer>
            
        </div>
    );
}

export default hot(module)(App);