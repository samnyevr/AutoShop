import styled from "styled-components"

export const Background = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95vw;
    height: 70vh;

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
`;

export const Container = styled.section`
    position: absolute;
    width: 70%;
    height: 70%;
    z-index: 2;
    opacity: 1;
    padding: 5rem;
    border-radius: 15px;
    background: grey;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    flex-basis: auto;
`;

export const Title = styled.h1`
    width: fit-conten;
`;

export const Text = styled.p``;

export const Link = styled.div``;

export const Input = styled.input`
    width: fit-conten;
`;

export const Submit = styled.button``;
