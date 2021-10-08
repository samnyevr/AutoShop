import styled from "styled-components"

export const Container = styled.section`
    width: 100vw;
    font-size: var(--size-small);
`;

export const Logo = styled.img`
    width: 60px;
    position: absolute;
    z-index: 4;
    margin: 3em 0 0 3em;

`;

export const Text = styled.li`
    list-style: none;
    font-size: 2em;
    text-align: center;

    & > .active {
        border-bottom: 2px solid var(--color-primary);
    }
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
    opacity: ${({isOpen}) => isOpen ? "0.8" : "0"};
    display: ${({isOpen}) => isOpen ? "flex" : "none"};
    transition: opacity 1s;

    @media (min-width: 992px) {
        width: 100vw;
        height: fit-content;
        flex-direction: row;
        margin-left: 0;
        align-items: center;
        padding-left: 150px;
        padding-top: 4em;
        display: flex;
        opacity: 0.8;
    }
`;

export const Hamburger = styled.div`
    position: fixed;
    right: 30px;
    top: 50px;
    z-index: 3;
    width: 30px;
    height: 30px;
    

    @media (min-width: 992px) {
        display: none;
    }
`;

export const Line = styled.div`
    position: relative;
    width: 30px;
    height: 2px;
    background: white;
    transition: transform .5s;

    &:first-child {
        transform: ${({isOpen}) => isOpen ? "rotate(45deg)" : ""};
        top: ${({isOpen}) => isOpen ? "11px" : ""};
    }

    &:nth-child(2) {
        top: 5px;
        display: ${({isOpen}) => isOpen ? "none" : "block"}
    }

    &:last-child {
        top: 10px;
        transform: ${({isOpen}) => isOpen ? "rotate(-45deg)" : ""};
    }
`;