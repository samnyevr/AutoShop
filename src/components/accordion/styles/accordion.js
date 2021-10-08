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
    text-align: center;
`;

export const Item = styled.div`
    width: 300px;
    height: 300px;
    margin-bottom: 3em;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

export const Text = styled.p`
    z-index: 3;
    opacity: 1;
    color: white;
    font-size: 2em;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    position: relative;
`;


export const Image = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 10px 10px 10px black;
`;

export const Modal = styled.div`
    position: absolute;
    width: 250px;
    height: 250px;
    top: calc(250px + 4em);
    transition: top .5s;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: black;
        opacity: 0.5;
        z-index: 1;
    }

    ${Item}:hover & {
        top: 0;
    }
`;