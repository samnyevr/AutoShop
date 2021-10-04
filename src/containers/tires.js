import React from "react"
import { Accordion } from "../components"

export default function TiresContainer() {
    return <Accordion>
        <div style={{flex: "0 0 100%"}}>Get the Best Tire for Your Vehicle</div>
        <Accordion.Item>
            <Accordion.Image src="../images/Michelin.jpg"/>
            <Accordion.Modal>
                <Accordion.Text></Accordion.Text>
            </Accordion.Modal>
        </Accordion.Item>
        <Accordion.Item>
            <Accordion.Image src="../images/GoodYear.jpg"/>
            <Accordion.Modal>
                <Accordion.Text></Accordion.Text>
            </Accordion.Modal>
        </Accordion.Item>
        <Accordion.Item>
            <Accordion.Image src="../images/Bridgestone.jpg"/>
            <Accordion.Modal>
                <Accordion.Text></Accordion.Text>
            </Accordion.Modal>
        </Accordion.Item>
    </Accordion>
}