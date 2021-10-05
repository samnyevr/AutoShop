import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-image: linear-gradient(black, #1A1B1D, black);
`;

export const Image = styled.img`
    filter: invert(100%) sepia(0%) saturate(758%) hue-rotate(231deg) brightness(118%) contrast(108%);
    width: 100px;
`;

export const Item = styled.section``;

export const Text = styled.p`
    text-aligned = center;
    width: 100px;
`;