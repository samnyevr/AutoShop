import React, {useState} from "react"
import {Banner} from "../components"

import useWindowDimensions from "../hooks/windowsize"

/*
Quick flat repairs
Computerized tire balancing
Tire rotation
Wheel repair
Tire inspections
Air and pressure checks
Tire mounting
Tire matching
New tire installation>
*/

export default function ServicesContainer({children}) {
    const [offset, setOffSet] = useState(0);
    const {height, width} = useWindowDimensions();

    const handleClick = (event) => {
        if(event.target.classList.contains("left")) {
            setOffSet(offset-100);
        }
        else if(event.target.classList.contains("right")){
            setOffSet(offset+100);
        }
    }

    return (
        <>
        <Banner.Title>Our Services</Banner.Title>
        <Banner >
            <Banner.LeftArrowContainer className={"left"} onClick={handleClick}>
                <Banner.LeftArrow className={"left"}></Banner.LeftArrow>
            </Banner.LeftArrowContainer>
            <Banner.RightArrowContainer className={"right"} onClick={handleClick}>
                <Banner.RightArrow className={"right"}></Banner.RightArrow>
            </Banner.RightArrowContainer>
            <Banner.Carousel offset={offset}>
                <Banner.Item>
                    <Banner.Image src="../images/wheel.svg"></Banner.Image>
                    <Banner.Text>Quick Flat Repairs</Banner.Text>
                </Banner.Item>
                <Banner.Item>
                    <Banner.Image src="../images/wheel.svg"></Banner.Image>
                    <Banner.Text>Computerized Tire Balancing</Banner.Text>
                </Banner.Item>
                <Banner.Item>
                    <Banner.Image src="../images/wheel.svg"></Banner.Image>
                    <Banner.Text>Tire Rotation</Banner.Text>
                </Banner.Item>
                <Banner.Item>
                    <Banner.Image src="../images/wheel.svg"></Banner.Image>
                    <Banner.Text>Wheel Repair</Banner.Text>
                </Banner.Item>
                <Banner.Item>
                    <Banner.Image src="../images/wheel.svg"></Banner.Image>
                    <Banner.Text>Tire Inspection</Banner.Text>
                </Banner.Item>
                <Banner.Item>
                    <Banner.Image src="../images/wheel.svg"></Banner.Image>
                    <Banner.Text>Air and Pressure checks</Banner.Text>
                </Banner.Item>
                <Banner.Item>
                    <Banner.Image src="../images/wheel.svg"></Banner.Image>
                    <Banner.Text>Tire Matching</Banner.Text>
                </Banner.Item>
                <Banner.Item>
                    <Banner.Image src="../images/wheel.svg"></Banner.Image>
                    <Banner.Text>Tire Mounting</Banner.Text>
                </Banner.Item>
                <Banner.Item>
                    <Banner.Image src="../images/wheel.svg"></Banner.Image>
                    <Banner.Text>New Tire Installation</Banner.Text>
                </Banner.Item>
            </Banner.Carousel>
            
        </Banner>
        </>
    )
}