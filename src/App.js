import React, { Component} from "react";
import {hot} from "react-hot-loader";

import {Header} from "./components";

const App = () => {
    return (
        <Header>
            <Header.Title>Hector's Tire</Header.Title>
            <Header.SubTitle>The Best Tire for Your Vehicles</Header.SubTitle>
            <Header.Text>Call or stop by Today for free estimation</Header.Text>
            <Header.CTA>Call</Header.CTA>
            <Header.CTA>Appointment</Header.CTA>
        </Header>
    );
}

export default hot(module)(App);