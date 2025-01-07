/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import TopNav from "../components/TopNav";
const Connect = ({ isLightMode, setIsLightMode }) => {


    const [formData, setFormData] = useState({ name: "", subject: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh on submit


        setIsSubmitting(true);

        axios.post("https://n66mnx3j52.execute-api.us-east-1.amazonaws.com/sendMessage", {
            name: formData.name,
            subject: formData.subject,
            body_text: formData.message,
        })
            .then(() => {

                setFormData({ name: "", subject: "", message: "" });
            })
            .catch((error) => {

                console.error(error);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };


    return (<div className="centered-page">

        <TopNav isLightMode={isLightMode} setIsLightMode={setIsLightMode} />

        <div id="contact-page">

            <h1>Reach out</h1>
            <form id="contact-form" /* className="card-container" */ onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <textarea
                    required
                    id="name"
                    name="name"
                    rows={2}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="My name is ...."
                    aria-label="Enter your name"
                />
                <label htmlFor="subject">Email</label>
                <textarea
                    required
                    id="subject"
                    rows={2}
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="My email is..."
                    aria-label="Enter the subject"
                />
                <label htmlFor="message">Message</label>
                <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I want to talk to you about..."
                    aria-label="Enter your message"
                />
                <button style={{ width: "fit-content" }} className="link" type="submit" disabled={isSubmitting}>

                    {isSubmitting ? "Sending ..." : "Send"}

                </button>

            </form>


            <div className="svg-area">



                <a href="https://github.com/huss535" target="_blank" rel="noopener noreferrer">
                    <div className="svg-icon github"></div>
                    {/* <img src="src/assets/github.svg" /> */}
                </a>
                <a href="https://medium.com/@efar3200" target="_blank" rel="noopener noreferrer" >
                    {/* <img src="src/assets/medium.svg" /> */}
                    <div className="svg-icon medium"></div>
                </a>
                <a href="https://www.linkedin.com/in/elhussin-y-2643301a0/" target="_blank" rel="noopener noreferrer" >
                    {/* <img src="src/assets/linkedin.svg" /> */}
                    <div className="svg-icon linkedin"></div>
                </a>
            </div>
        </div>

        <div className='dot-background'></div>


    </div>);
}

export default Connect;