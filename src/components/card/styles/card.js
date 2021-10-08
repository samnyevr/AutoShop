import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: var(--size-regular);
`;

export const Title = styled.h1`
    flex: 0 0 100%;
    padding: 1em 0 1em 1em;

`;

export const Item = styled.figure`
    margin: 1em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 200px;
    height: 300px;
    box-shadow: 
        inset 5px 5px 5px rgba(0,0,0,0.2),
        inset -5px -5px 15px rgba(255,255,255,0.1),
        5px 5px 15px rgba(0,0,0,0.3),
        -5px -5px 15px rgba(255,255,255,0.1)
    ;
    border-radius: 15px;
`;

export const Text = styled.blockquote`
    text-align: center;
    cursor: default;
`;

export const Profile = styled.img`
    border-radius: 50%;
    width: 50%;
`;

export const Rating = styled.p``;

export const Name = styled.figcaption``;