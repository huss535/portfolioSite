import { useState, useRef } from "react";
import axios from "axios";
import { motion } from "motion/react"
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import medium from '../assets/medium.svg'
import MinButton from "../components/MinButton";
import discord from "../assets/discord.svg"

const Connect = () => {
    const notificationRef = useRef(null);


    const [formData, setFormData] = useState({ name: "", subject: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailError, setEmailError] = useState("Need a valid email"); // State to track email validation error
    const [buttonText, setButtonText] = useState("SEND");
    const [popupText, setPopupText] = useState("");

    const validateEmail = (email) => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));

        if (name === "subject") {
            if (!validateEmail(value)) {
                setEmailError("Need a valid email");
            } else {
                setEmailError("Checks Out :)"); // Clear error if email is valid
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh on submit



        // Check if email is valid before submitting
        if (!validateEmail(formData.subject)) {
            setEmailError("Need a valid email.");
            setButtonText("Send"); // Reset button text if validation fails
            return;
        }

        setIsSubmitting(true);

        setPopupText("Processing Request")
        notificationRef.current.classList.add("show-notification")
        setTimeout(() => {
            notificationRef.current.classList.remove("show-notification")
        }, 3000);
        axios
            .post("https://n66mnx3j52.execute-api.us-east-1.amazonaws.com/sendMessage", {
                name: formData.name,
                subject: formData.subject,
                body_text: formData.message,
            })
            .then(() => {
                setPopupText("Message Recieved")
                notificationRef.current.classList.add("show-notification")
                setFormData({ name: "", subject: "", message: "" }); // Reset form
                setEmailError("Need a valid email"); // Clear email error
            })
            .catch((error) => {
                console.error(error);
                setButtonText("SEND"); // Reset button text in case of failure
                setEmailError("Failed to send. Please try again."); // Show error message
            })
            .finally(() => {
                setIsSubmitting(false);
                // Reset button text after a delay (optional)
                setTimeout(() => {
                    notificationRef.current.classList.remove("show-notification")
                }, 3000);
            });
    };







    return (

        <motion.div className="centered-page"
            initial={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
        >



            <div id="contact-page" className="page-margins">
                <h1

                    className='container-shadow-left'

                >
                    <span


                    >QUESTIONS?</span>
                </h1>
                <form

                    id="contact-form"
                    className='container-shadow-left'
                    onSubmit={handleSubmit}>


                    <div className="label-textarea-section">
                        <label
                            htmlFor="name"

                        >
                            Name
                        </label>

                        <textarea

                            required
                            id="name"
                            name="name"
                            rows={1}
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="My name is ...."
                            aria-label="Enter your name"
                        />

                    </div>
                    <div className="label-textarea-section">
                        <label
                            htmlFor="subject"

                        >
                            Email
                        </label>

                        <div

                            style={{
                                display: "flex", justifyContent: 'center',
                                alignItems: "flex-end", flexDirection: 'column',
                                width: '100%', gap: '1rem'
                            }}
                        >

                            <textarea

                                required
                                id="subject"
                                rows={1}
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="My email is..."
                                aria-label="Enter the subject"
                            />

                            {emailError && <span
                                key={emailError}
                                /*  initial={{ x: 1000 }}
                                 animate={{ x: '0%', transition: { duration: 1, delay: 0.9, ease: "easeOut" } }} */
                                className={emailError ? "show" : ""}
                                id="error-message">
                                {emailError}
                            </span>}
                        </div>
                    </div>

                    <div className="label-textarea-section">
                        <label
                            htmlFor="message"

                        >
                            Message
                        </label>

                        <textarea

                            required
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="I want to talk to you about..."
                            aria-label="Enter your message"
                        />

                    </div>



                    <MinButton text={buttonText} isButton={true} isSubmitting={isSubmitting} />
                    <span ref={notificationRef} className="notification">{popupText}</span>

                </form>

                <div className="svg-area">
                    <a

                        href="https://github.com/huss535" target="_blank" rel="noopener noreferrer">
                        <div className="icon" style={{ maskImage: `url(${github})`, WebkitMaskImage: `url(${github})` }} />

                    </a>

                    <a

                        href="https://medium.com/@efar3200" target="_blank" rel="noopener noreferrer">
                        <div className="icon" style={{ maskImage: `url(${medium})`, WebkitMaskImage: `url(${medium})` }} />

                    </a>
                    <a

                        href="https://www.linkedin.com/in/elhussin-y-2643301a0/" target="_blank" rel="noopener noreferrer">
                        <div className="icon" style={{ maskImage: `url(${linkedin})`, WebkitMaskImage: `url(${linkedin})` }} />

                    </a>
                    <a

                        href="https://www.discordapp.com/users/1322485289121222686" target="_blank" rel="noopener noreferrer">
                        <div className="icon" style={{ maskImage: `url(${discord})`, WebkitMaskImage: `url(${discord})` }} />

                    </a>

                </div>
            </div>


        </motion.div>



    );
};

export default Connect;
