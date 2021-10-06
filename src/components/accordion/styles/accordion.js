import styled from "styled-components"

export const Container = styled.section`
    display: flex;  
    flex-wrap: wrap;
    margin: 5em 3em 0 3em;
    justify-content: center;
    font-size: var(--size-regular);
`;

export const Title = styled.h1`
    flex: 0 0 100%;
    font-size: 2em;
    margin-bottom: 2em;
`;

export const Item = styled.div`
    flex-basis: 250px;
    margin: 3em;
`;

export const Text = styled.p`
`;

export const Image = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 10px 10px 10px black;
`;

export const Modal = styled.div``;