import React from "react"

import {
    Container,
    Text,
    List
} from "./styles/navbar"

export default function Navbar({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
};

Navbar.List = function NavbarList({children, ...restProps}) {
    return <List {...restProps}>{children}</List>
};

Navbar.Text = function NavbarText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
};