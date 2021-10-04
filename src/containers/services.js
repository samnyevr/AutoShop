import React from "react"
import {Banner} from "../components"

/*Quick flat repairs
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
                <Banner.Text>Tire Repair</Banner.Text>
            </Banner.Item>
        </Banner>
    )
}