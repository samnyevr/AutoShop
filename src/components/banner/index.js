import React from "react"

import {
    Container,
    Item,
    Image,
    Text
} from "./styles/banner"

export default function Banner({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
};

Banner.Item = function BannerItem({children, ...restProps}) {
    return <Item {...restProps}>{children}</Item>
}

Banner.Image = function BannerImage({src, ...restProps}) {
    return <Image {...restProps} src={src}/>
}

Banner.Text = function BannerText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}