import React from "react";

import {
    Background,
    Title,
    SubTitle,
    Text,
    CTA

} from "./styles/header"

export default function Header ({children, ...restProps}) {
    return <Background {...restProps}>{children}</Background>;
};

Header.Title = function HeaderTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
};

Header.SubTitle = function HeaderSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Header.Text = function HeaderText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>;
};

Header.CTA = function HeaderCTA({children, ...restProps}) {
    return <CTA {...restProps}>{children}</CTA>
}

