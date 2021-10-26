import React from "react"
import { Accordion } from "../components"

export default function TiresContainer() {
    return <Accordion id="tires">
        <Accordion.Title >Get the Best Tire for Your Vehicle</Accordion.Title>
        <Accordion.Item>
        <Accordion.Image src="https://res.cloudinary.com/dsp40oobl/image/upload/v1635018214/Autoshop/Michelin_ygq82s.jpg"/>
            <Accordion.Modal>
                <Accordion.Text>Michelin</Accordion.Text>
            </Accordion.Modal>
        </Accordion.Item>
        <Accordion.Item>
            <Accordion.Image src="https://res.cloudinary.com/dsp40oobl/image/upload/v1635018216/Autoshop/GoodYear_mog1lv.jpg"/>
            <Accordion.Modal>
                <Accordion.Text>GoodYear</Accordion.Text>
            </Accordion.Modal>
        </Accordion.Item>
        <Accordion.Item>
            <Accordion.Image src="https://res.cloudinary.com/dsp40oobl/image/upload/v1635018216/Autoshop/Bridgestone_jfwbs7.jpg"/>
            <Accordion.Modal>
                <Accordion.Text>Bridgestone</Accordion.Text>
            </Accordion.Modal>
        </Accordion.Item>
    </Accordion>
}