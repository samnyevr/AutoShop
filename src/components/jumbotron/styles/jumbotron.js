import styled from "styled-components";

export const Background = styled.section`
    background-color: black;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    &:after {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/tire.png')}) 85% 100% no-repeat;
        background-size: 50%;
        opacity: 0.25;
    }
`;

export const Container = styled.section`
    z-index: 2;
    padding-left: 10rem;
`;

export const Title = styled.h1`
    font-size: 100px;
    padding-bottom: 50px;
    font-weight: bold;
`;

export const SubTitle = styled.h2`
    font-size: 40px;
    padding-bottom: 20px;
    color: #DDDDDD;
`;

export const Text = styled.p`
    font-size: 30px;
    padding-bottom: 50px;
    color: #AEAEAE;
`;

export const CTA = styled.button`
    background: #990000;
    color: white;
    width: fit-content;
    padding: 20px 70px;
    border: none;
    border: solid #990000 2px;
    border-radius: 5px;
    
    &:last-of-type {
        
        margin-left: 50px;
        background: transparent;
    }
`;