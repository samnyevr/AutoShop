import React from "react"
import { Accordion } from "../components"

export default function TiresContainer() {
    return <Accordion>
        <Accordion.Title >Get the Best Tire for Your Vehicle</Accordion.Title>
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
        <Accordion.Item>
            <Accordion.Image />
            <Accordion.Modal>
                <Accordion.Text></Accordion.Text>
            </Accordion.Modal>
        </Accordion.Item>
    </Accordion>
}