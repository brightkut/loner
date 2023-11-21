import "../styles/Contact.scss"
import React, {useState} from "react";
import {useSelector} from "react-redux";

function Contact() {
    const [name, setName] = useState("name")
    const [email, setEmail] = useState("email")
    const [message, setMessage] = useState("message")
    const isNight = useSelector(state => state.night)

    function onChangeName(event) {
        setName(event.target.value)
    }

    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangeMessage(event) {
        setMessage(event.target.value)
    }

    function sendMail() {
        setName("")
        setEmail("")
        setMessage("")
    }

    const styleMorning = {
        backgroundColor: "white",
        paddingBottom: "2 rem"
    }
    const styleNight = {
        backgroundColor: "#343a40",
        paddingBottom: "2 rem"
    }

    const fontHeadMorning = {
        color: "#535A5E"
    }
    const fontHeadNight = {
        color: "#D3D2D2"
    }

    const btnNight = "btn btn-outline-light btn-send"
    const btnMorning = "btn btn-outline-secondary btn-send"

    return (
        <section id="contact" className="pt-5 pb-5" style={isNight ? styleNight : styleMorning}>
            <div className="container text-center">
                <h3 className="contact-header" style={isNight ? fontHeadNight : fontHeadMorning}>Contact</h3>
                <p style={{fontSize: "16px", fontFamily: "Segoe UI Emoji", color: isNight ? "#D3D2D2" : "#535A5E"}}>I
                    always looking forward to share about
                    programing with you guy and open
                    for good new opportunity!</p>
                <hr className="line-port" style={isNight ? fontHeadNight : fontHeadMorning}/>
                <div className="container pt-5">
                    <div className="input-group mb-4" style={{width: "50%", margin: "auto"}}>
                        < input type="text" className="form-control" placeholder="name" aria-label="name" value={name}
                                aria-describedby="basic-addon1" onChange={onChangeName}/>
                    </div>
                    <div className="input-group mb-4" style={{width: "50%", margin: "auto"}}>
                        < input type="text" className="form-control" placeholder="email" value={email}
                                aria-label="email"
                                aria-describedby="basic-addon1" onChange={onChangeEmail}/>
                    </div>

                    <div className="input-group mb-4" style={{width: "50%", margin: "auto"}}>
                        <textarea className="form-control" aria-label="message" placeholder="message" value={message}
                                  onChange={onChangeMessage}></textarea>
                    </div>

                    <div className="input-group mb-5" style={{width: "50%", margin: "auto"}}>
                        <button type="button" className={isNight ? btnNight : btnMorning}
                                style={{width: "100%"}} onClick={sendMail}>Send
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;