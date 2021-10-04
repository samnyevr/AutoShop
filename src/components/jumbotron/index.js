import React from "react";

import {
    Background,
    Container,
    Title,
    SubTitle,
    Text,
    CTA

} from "./styles/jumbotron"

export default function Jumbotron ({children, ...restProps}) {
    return <Background {...restProps}>{children}</Background>;
};

Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Text = function JumbotronText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>;
};

Jumbotron.CTA = function JumbotronCTA({children, ...restProps}) {
    return <CTA {...restProps}>{children}</CTA>
}

