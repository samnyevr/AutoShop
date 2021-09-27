import styled from "styled-components";

export const Background = styled.section`
    background-color: black;
    width: 100vw;
    height: 100vh;
    

    &:before {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/tire.png')}) no-repeat;
        opacity: 0.25;
    }
`;

export const Title = styled.h1``;

export const SubTitle = styled.h2``;

export const Text = styled.p`
    color: white;
`;

export const CTA = styled.button`
    background: red;
`;