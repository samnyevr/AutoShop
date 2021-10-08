import React from "react"

import {Form} from "../components"

export default function ScheduleContainer({children}) {
    return <Form id="schedule">
        <Form.Container>
            <Form.Base>
                <Form.Title>Schedule An Appointment</Form.Title>
                <Form.Input 
                    placeholder={"Your Name"}
                />
                <Form.Input 
                    placeholder={"Your Email Address"}
                />
                <Form.Input
                    type={"date"}
                />
                <Form.Submit>
                    Submit
                </Form.Submit>
            </Form.Base>
        </Form.Container>
    </Form>
}