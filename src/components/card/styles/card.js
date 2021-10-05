import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const Item = styled.figure`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 200px;
    height: 300px;
    border: 1px solid white;
    border-radius: 15px;
`;

export const Text = styled.blockquote`
    text-align: center;
`;

export const Profile = styled.img`
    border-radius: 50%;
    width: 50%;
`;

export const Rating = styled.p``;

export const Name = styled.figcaption``;