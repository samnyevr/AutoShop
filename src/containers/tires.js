import React from "react"
import { Accordion } from "../components"

export default function TiresContainer() {
    return <Accordion>
        Get the Best Tire for Your Vehicle
        <Accordion.Item>
            <Accordion.Image src="../images/Michelin.jpg"/>
            <Accordion.Modal>
                <Accordion.Text></Accordion.Text>
            </Accordion.Modal>
        </Accordion.Item>
    </Accordion>
}