import styled from "styled-components"

export const Container = styled.section`
    width: 100vw;
    font-size: var(--size-small);
`;

export const Logo = styled.img`
    width: 100px;
    position: fixed;
    z-index: 4;
    margin: 3em 0 0 3em;
`;

export const Text = styled.li`
    list-style: none;
    font-size: 2em;
    text-align: center;
`;

export const List = styled.ul`
    width: 50vw; 
    height: 100vh;
    position: fixed;
    margin-left: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 3em 0;
    z-index: 3;
    background: var(--color-background);
    opacity: 0.8;
    display: none;

    @media (min-width: 992px) {
        width: 100vw;
        height: fit-content;
        flex-direction: row;
        margin-left: 0;
        align-items: center;
        padding-left: 150px;
        margin-top: 2em;
    }
`;

export const Hamburger = styled.div`
    position: fixed;
    right: 30px;
    top: 30px;
    z-index: 3;

    @media (min-width: 992px) {
        display: none;
    }
`;

export const Line = styled.div`
    position: relative;
    width: 30px;
    height: 2px;
    background: white;

    &:first-of-type {
        
    }

    &:nth-of-type(2) {
        top: 5px;
    }

    &:last-of-type {
        top: 10px;
    }
`;