import React from "react"
import {Banner} from "../components"

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
    return (
        <Banner>
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
        </Banner>
    )
}