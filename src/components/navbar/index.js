import React from "react"

import {
    Container,
    Text,
    List,
    Hamburger,
    Line,
    Logo
} from "./styles/navbar"

export default function Navbar({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
};

Navbar.Logo = function NavbarLogo({src, ...restProps}) {
    return <Logo {...restProps} src={src}/>
}

Navbar.List = function NavbarList({children, ...restProps}) {
    return <List {...restProps}>{children}</List>
};

Navbar.Text = function NavbarText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
};

Navbar.Hamburger = function NavbarHamburger({children, ...restProps}) {
    return <Hamburger {...restProps}>{children}</Hamburger>
}

Navbar.Line = function NavbarLine({children, ...restProps}) {
    return <Line {...restProps}>{children}</Line>
}