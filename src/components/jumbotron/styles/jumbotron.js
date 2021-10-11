import styled from "styled-components";

export const Background = styled.section`
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    font-size: var(--size-small);
    
    &:after {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background: url('../images/tire.png') 50% 50% no-repeat;
        background-size: 100%;
        opacity: 0.25;
        z-index: 1;
    }

    @media (min-width: 688px) {
        &:after {
            background-position: 80% 70%;
            background-size: 70%;
        }
        text-align: initial;
        font-size: var(--size-regular);
    }

    @media (min-width: 992px) {
        &:after {
            background-position: 80% 70%;
            background-size: 50%;
        }
        font-size: var(--size-medium);
    }

    @media (min-width: 1312px) {
        max-width: 1200px;
    }
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    padding-left: 2.5em;
    padding-right: 2.5em;
    text-align:inherit;

    @media (min-width: 688px) {
        align-items: initial;
    }
`;

export const Title = styled.h1`
    font-size: 4em;
    padding-bottom: 50px;
    font-weight: bold;
    text-align: inherit;
`;

export const SubTitle = styled.h2`
    font-size: 1.8em;
    padding-bottom: 20px;
    color: #DDDDDD;
    text-align: inherit;
`;

export const Text = styled.p`
    font-size: 1.6em;
    padding-bottom: 50px;
    color: #AEAEAE;
    
    text-align: inherit;
`;

export const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 688px) {
        justify-content: initial;
        align-items: initial;
        flex-direction: row;
    }
`;

export const CTA = styled.button`
    background: #990000;
    color: white;
    width: 250px;
    padding: 20px 70px;
    border: none;
    border: solid #990000 2px;
    border-radius: 10px;
    cursor: pointer;
    transition: transform .5s;

    &#JumboAppointment{
        margin-top: 50px;
        background: transparent;

        @media (min-width: 688px) {
            margin-top: 0px;
            margin-left: 50px;
        }

        
    }

    &:hover {
        transform: scale(1.05);
    }


`;