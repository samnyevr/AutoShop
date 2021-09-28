import React from "react";

import {Navbar} from "../components";

export default function NavbarContainer({children}) {
    return (
        <Navbar>
            <Navbar.Text>Home</Navbar.Text>
            <Navbar.Text>Services</Navbar.Text>
            <Navbar.Text>Schedule</Navbar.Text>
            <Navbar.Text>New Tire</Navbar.Text>
            <Navbar.Text>Contact</Navbar.Text>
        </Navbar>
    )
}