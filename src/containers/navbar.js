import React, {useState} from "react";

import {Navbar} from "../components";

export default function NavbarContainer({children}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (event) => {
        setIsOpen(!isOpen);
    };

    return (
        <Navbar>
            <Navbar.Logo src="../images/tire.png"></Navbar.Logo>
            <Navbar.List isOpen={isOpen}>
                <Navbar.Text>Home</Navbar.Text>
                <Navbar.Text>Services</Navbar.Text>
                <Navbar.Text>Schedule</Navbar.Text>
                <Navbar.Text>New Tire</Navbar.Text>
                <Navbar.Text>Contact</Navbar.Text>
            </Navbar.List>
            <Navbar.Hamburger onClick={handleClick}>
                <Navbar.Line isOpen={isOpen} ></Navbar.Line>
                <Navbar.Line isOpen={isOpen} ></Navbar.Line>
                <Navbar.Line isOpen={isOpen} ></Navbar.Line>
            </Navbar.Hamburger>
        </Navbar>
    )
}