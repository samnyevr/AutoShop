import React, {useState} from "react";
import {Link} from "react-scroll";

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
                <Navbar.Text>
                    <Link 
                        activeClass="active" 
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Home</Link>
                </Navbar.Text>
                {/* <Navbar.Text>
                    <Link 
                        activeClass="active" 
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                    >Services</Link>
                </Navbar.Text> */}
                <Navbar.Text>
                    <Link 
                        activeClass="active" 
                        to="tires"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                    >Tires</Link>
                </Navbar.Text>
                <Navbar.Text>
                    <Link 
                        activeClass="active" 
                        to="schedule"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Schedule</Link>
                </Navbar.Text>
                <Navbar.Text>
                    <Link 
                        activeClass="active" 
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Contact</Link>
                </Navbar.Text>
            </Navbar.List>
            <Navbar.Hamburger onClick={handleClick}>
                <Navbar.Line isOpen={isOpen} ></Navbar.Line>
                <Navbar.Line isOpen={isOpen} ></Navbar.Line>
                <Navbar.Line isOpen={isOpen} ></Navbar.Line>
            </Navbar.Hamburger>
        </Navbar>
    )
}