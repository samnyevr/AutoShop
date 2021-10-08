import React from "react"
import {Link} from "react-scroll";

import {
    Container,
    Item,
    Text,
    Profile,
    Rating,
    Name,
    Title
} from "./styles/card"

export default function Card({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
};

Card.Title = function CardTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
};

Card.Item = function CardItem({children, ...restProps}) {
    return <Item {...restProps}>{children}</Item>;
};

Card.Text = function CardText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>;
};

Card.Profile = function CadProfile({src, ...restProps}) {
    return <Profile {...restProps} src={src}/>
};

Card.Rating = function CardRating({children, ...restProps}) {
    return <Rating {...restProps}>{children}</Rating>
};

Card.Name = function CardName({children, ...restProps}) {
    return <Name {...restProps}>{children}</Name>
};

