import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    width: 100%;
    
    overflow: hidden;
    background-color: #212223;
    font-size: var(--size-small);

    @media (min-width: 992px) {
        font-size: var(--size-regular);
    }
`;

export const Title = styled.h1`
    font-size: 2em;
    margin: 1em 0;
    text-align: center;
`;

export const Carousel = styled.div`
    display: flex;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory; 
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
    position: relative;
    transform: translateX(calc(10em * ${props => props.offset}));
    transition: transform 0.5s;
    width: 1000px;

    &::-webkit-scrollbar {
        display: none;
      }
`;

export const Item = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    scroll-snap-align: start;
    flex-strink: 0;

    &:first-of-type {
        margin-left: 70px;
    }
`;

export const Image = styled.img`
    filter: invert(100%) sepia(0%) saturate(758%) hue-rotate(231deg) brightness(118%) contrast(108%);
    width: 8em;
    height: 8em;
`;

export const Text = styled.p`
    text-aligned = center;
    font-size: 1.5em;
    text-align: center;
    width: 8em;
`;


export const LeftArrow = styled.div`
    width: 0;
    height: 0;
    position: absolute;
    border-style: solid;
    border-width: 10px 20px 10px 0;
    border-color: transparent white transparent transparent;
    
    top: 45%;
    left: 25%;
    z-index: 2;

    @media (min-width: 922px) {
        border-width: 15px 30px 15px 0;
        border-color: transparent white transparent transparent;
        left: 25%;
    }
`;

export const RightArrow = styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 0 10px 20px;
    border-color: transparent transparent transparent white;
    position: absolute;
    top: 45%;
    left: 25%;
    z-index: 2;

    @media (min-width: 922px) {
        border-width: 15px 0 15px 30px;
        border-color: transparent transparent transparent white;
        left: 25%;
    }
`;

export const LeftArrowContainer = styled.div`
    width: 50px;
    height: 100%;
    position: absolute;
    z-index: 2;
    transition: background-color .5s;

    &:before {
        content: "";
        background-color: black;
        opacity: .8;
        background-size: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
    }

    @media (min-width: 922px) {
        width: 60px;
    }

    &:hover {
        background-color: white;
    }
}
`;

export const RightArrowContainer = styled.div`
    width: 50px;
    height: 100%;
    position: absolute;
    z-index: 2;
    right: 0;
    top: 0;
    transition: background-color .5s;

    &:before {
        content: "";
        background-color: black;
        opacity: .8;
        background-size: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
    }

    @media (min-width: 922px) {
        width: 60px;
    }

    &:hover {
        background-color: white;
    }
}
`;
