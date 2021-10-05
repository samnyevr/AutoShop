import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    background-color: #212223;

    font-size: var(--size-small);
    overflow: hidden;

    @media (min-width: 992px) {
        font-size: var(--size-regular);
    }
`;

export const Image = styled.img`
    filter: invert(100%) sepia(0%) saturate(758%) hue-rotate(231deg) brightness(118%) contrast(108%);
    width: 8em;
    height: 8em;
`;

export const Item = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
`;

export const Text = styled.p`
    text-aligned = center;
    font-size: 1.5em;
    text-align: center;
    width: 8em;
`;