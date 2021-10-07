import React from "react"

import {
    Container,
    Item,
    Image,
    Text,
    Carousel,
    LeftArrow,
    RightArrow,
    LeftArrowContainer,
    RightArrowContainer,
    Title
} from "./styles/banner"

export default function Banner({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
};

Banner.Title = function BannerTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
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

Banner.Carousel = function BannerCarousel({children, ...restProps}) {
    return <Carousel {...restProps}>{children}</Carousel>
}

Banner.LeftArrow = function BannerLeftArrow({children, ...restProps}) {
    return <LeftArrow {...restProps}>{children}</LeftArrow>
};

Banner.RightArrow = function BannerRightArrow({children, ...restProps}) {
    return <RightArrow {...restProps}>{children}</RightArrow>
};

Banner.LeftArrowContainer = function BannerLeftArrowContainer({children, ...restProps}) {
    return <LeftArrowContainer {...restProps}>{children}</LeftArrowContainer>
}

Banner.RightArrowContainer = function BannerRightArrowContainer({children, ...restProps}) {
    return <RightArrowContainer {...restProps}>{children}</RightArrowContainer>
}