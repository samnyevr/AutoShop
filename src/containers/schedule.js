import React, {useState, useEffect} from "react";

import {Form } from "../components"

export default function ScheduleContainer({children}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [success, setSuccess] = useState(false);
    const [display, setDisplay] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(name !== "" && email !== "" && date !== ""){
            setSuccess(true);
            setDisplay(true);
            setName("");
            setEmail("");
            setDate("");
        }
        else {
            setSuccess(false);
            setDisplay(true);
        }
    }

    useEffect(() => {
        if(display === true){
            setTimeout(() => {
                setDisplay(false);
                console.log("ok")
                console.log(success);
            }, 3000)
        }
    }, [display]);

    const handleChange = (event) => {
        if(event.target.type === "text"){
            setName(event.target.value);
        }
        if(event.target.type === "email"){
            setEmail(event.target.value);
        }
        if(event.target.type === "date"){
            setDate(event.target.value);
        }
    }

    return <Form id="schedule">
        <Form.Container>
            <Form.Base  onSubmit={handleSubmit}>
                <Form.Title style={{marginBottom: display ? "0px" : "3em"}}>Schedule An Appointment</Form.Title>
                {display ? (
                success ? 
                    <Form.Success>You have successfully submit the form</Form.Success> :
                    <>
                        <Form.Failure>Something is wrong with the form</Form.Failure>
                        {name ==="" ? <Form.Warning>Name is missing</Form.Warning> : null}
                        {email ==="" ? <Form.Warning>Email is missing</Form.Warning> : null}
                        {date ==="" ? <Form.Warning>Date is missing</Form.Warning> : null}
                    </>
                ) : <></>}

                <Form.Input 
                    placeholder={"Your Name"}
                    type="text"
                    value={name}
                    onChange={handleChange}
                />
                <Form.Input 
                    placeholder={"Your Email Address"}
                    type="email"
                    value={email}
                    onChange={handleChange}
                />
                <Form.Input
                    type="date"
                    value={date}
                    onChange={handleChange}
                />
                <Form.Submit>
                    Submit
                </Form.Submit>
            </Form.Base>
        </Form.Container>
    </Form>
}