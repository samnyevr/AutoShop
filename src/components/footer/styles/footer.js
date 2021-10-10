import styled from "styled-components";

export const Container = styled.section`
    margin: 2em;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 2em;

    @media (min-width: 992px) {
        text-align: initial;
    }
`;

export const Text = styled.p`
    margin: 1em;
    margin-left: 0;
    text-align: center;

    @media (min-width: 992px) {
        text-align: initial;
    }
`;