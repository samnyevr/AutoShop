import styled from "styled-components"

export const Background = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 98vw;
    height: 70vh;
    font-size: var(--size-regular);

    &:before {
        content:"";
        background-image: url(../images/Mechanics_mod.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0.3;
    }

    &:after{
        content: "";
        position: absolute;
        background: grey;
        width: 100%;
        height: 70%;
        opacity: 0.7;
    }
`;

export const Container = styled.section`
    position: absolute;
    width: 100%;
    height: 70%;
    z-index: 2;
    opacity: 1;
    padding: 3em;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 1.5em;
`;

export const Text = styled.p``;

export const Link = styled.div``;

export const Input = styled.input`
    padding: 1em;
    margin: 1em;
    border-radius: 15px;
    border: none;
    box-shadow: 1px 1px 5px white;
    margin-left: 0;
`;

export const Submit = styled.button`
    border: none;
    margin: 1em;
    border-style: none;
    padding: 1em;
    width: 100px;
    border-radius: 15px;
    box-shadow: 1px 1px 5px white;
    margin-left: auto;
`;
