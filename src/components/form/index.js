import React from "react"

import {
    Background,
    Container,
    Base,
    Title,
    Text,
    Link,
    Input,
    Submit,
} from "./styles/form"

export default function Form({children, ...restProps}) {
    return <Background {...restProps}>{children}</Background>;
};

Form.Container = function FormContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;
}

Form.Base = function FormBase({children, ...restProps}) {
    return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>;
};

Form.Link = function FormLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>;
};

Form.Input = function FormInput({children, ...restProps}) {
    return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({children, ...restProps}) {
    return <Submit {...restProps}>{children}</Submit>;
};

