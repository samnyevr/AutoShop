import React from "react"

import {
    Container,
    Item,
    Text,
    Image,
    Modal,
    Title
} from "./styles/accordion"

export default function Accordion({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;
};

Accordion.Title = function AccordionTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Accordion.Item = function AccordionItem({children, ...restProps}) {
    return <Item {...restProps}>{children}</Item>;
};

Accordion.Text = function AccordionText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>;
};

Accordion.Image = function AccordionImage({src, ...restProps}) {
    return <Image {...restProps} src={src}/>;
};

Accordion.Modal = function AccordionModal({children, ...restProps}) {
    return <Modal {...restProps}>{children}</Modal>;
}