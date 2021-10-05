import React from "react";

import {
    Container,
    Row,
    Column
    
} from "./styles/flex"

export default function Flex({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
};