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

    const boxShadowStyle2 = "0.0625rem -0.0625rem 0 var(--color-accent), 0.075rem -0.075rem 0 var(--color-accent), 0.0875rem -0.0875rem 0 var(--color-accent), 0.1rem -0.1rem 0 var(--color-accent), 0.1125rem -0.1125rem 0 var(--color-accent), 0.125rem -0.125rem 0 var(--color-accent), 0.1375rem -0.1375rem 0 var(--color-accent), 0.15rem -0.15rem 0 var(--color-accent), 0.1625rem -0.1625rem 0 var(--color-accent), 0.175rem -0.175rem 0 var(--color-accent), 0.1875rem -0.1875rem 0 var(--color-accent), 0.2rem -0.2rem 0 var(--color-accent), 0.2125rem -0.2125rem 0 var(--color-accent), 0.225rem -0.225rem 0 var(--color-accent), 0.2375rem -0.2375rem 0 var(--color-accent), 0.25rem -0.25rem 0 var(--color-accent), 0.2625rem -0.2625rem 0 var(--color-accent), 0.275rem -0.275rem 0 var(--color-accent), 0.2875rem -0.2875rem 0 var(--color-accent), 0.3rem -0.3rem 0 var(--color-accent), 0.3125rem -0.3125rem 0 var(--color-accent), 0.325rem -0.325rem 0 var(--color-accent), 0.3375rem -0.3375rem 0 var(--color-accent), 0.35rem -0.35rem 0 var(--color-accent), 0.3625rem -0.3625rem 0 var(--color-accent), 0.375rem -0.375rem 0 var(--color-accent), 0.3875rem -0.3875rem 0 var(--color-accent), 0.4rem -0.4rem 0 var(--color-accent), 0.4125rem -0.4125rem 0 var(--color-accent), 0.425rem -0.425rem 0 var(--color-accent), 0.4375rem -0.4375rem 0 var(--color-accent), 0.45rem -0.45rem 0 var(--color-accent), 0.4625rem -0.4625rem 0 var(--color-accent), 0.475rem -0.475rem 0 var(--color-accent), 0.4875rem -0.4875rem 0 var(--color-accent), 0.5rem -0.5rem 0 var(--color-accent), 0.5125rem -0.5125rem 0 var(--color-accent), 0.525rem -0.525rem 0 var(--color-accent), 0.5375rem -0.5375rem 0 var(--color-accent), 0.55rem -0.55rem 0 var(--color-accent), 0.5625rem -0.5625rem 0 var(--color-accent), 0.575rem -0.575rem 0 var(--color-accent), 0.5875rem -0.5875rem 0 var(--color-accent), 0.6rem -0.6rem 0 var(--color-accent), 0.6125rem -0.6125rem 0 var(--color-accent), 0.625rem -0.625rem 0 var(--color-accent), 0.6375rem -0.6375rem 0 var(--color-accent), 0.65rem -0.65rem 0 var(--color-accent), 0.6625rem -0.6625rem 0 var(--color-accent), 0.675rem -0.675rem 0 var(--color-accent), 0.6875rem -0.6875rem 0 var(--color-accent), 0.7rem -0.7rem 0 var(--color-accent), 0.7125rem -0.7125rem 0 var(--color-accent), 0.725rem -0.725rem 0 var(--color-accent), 0.7375rem -0.7375rem 0 var(--color-accent), 0.75rem -0.75rem 0 var(--color-accent)";

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
            initial={{ opacity: 0, transition: { duration: 0.4 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >



            <div id="contact-page" className="page-margins">
                <motion.h1
                    initial={{ boxShadow: "0px 0px 0px var(--color-background)" }}
                    animate={{ boxShadow: boxShadowStyle2, transition: { duration: 0.5, delay: 0.3 } }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                    className='container-shadow-right'

                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}

                    >QUESTIONS?</motion.span>
                </motion.h1>
                <motion.form
                    initial={{ boxShadow: "0rem 0rem 0rem var(--color-background)" }}
                    animate={{ boxShadow: boxShadowStyle2, transition: { duration: 0.5, delay: 0.5 } }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                    id="contact-form"
                    className='container-shadow-right'
                    onSubmit={handleSubmit}>


                    <div className="label-textarea-section">
                        <motion.label
                            htmlFor="name"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6, ease: "easeOut" } }}
                        >
                            Name
                        </motion.label>

                        <motion.textarea
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7, ease: "easeOut" } }}
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
                        <motion.label
                            htmlFor="subject"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8, ease: "easeOut" } }}
                        >
                            Email
                        </motion.label>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.9, ease: "easeOut" } }}
                            style={{
                                display: "flex", justifyContent: 'center',
                                alignItems: "flex-end", flexDirection: 'column',
                                width: '100%', gap: '1rem'
                            }}
                        >

                            <motion.textarea
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.9, ease: "easeOut" } }}
                                required
                                id="subject"
                                rows={1}
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="My email is..."
                                aria-label="Enter the subject"
                            />

                            {emailError && <motion.span
                                key={emailError}
                                /*  initial={{ x: 1000 }}
                                 animate={{ x: '0%', transition: { duration: 1, delay: 0.9, ease: "easeOut" } }} */
                                className={emailError ? "show" : ""}
                                id="error-message">
                                {emailError}
                            </motion.span>}
                        </motion.div>
                    </div>

                    <div className="label-textarea-section">
                        <motion.label
                            htmlFor="message"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1, ease: "easeOut" } }}
                        >
                            Message
                        </motion.label>

                        <motion.textarea
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.1, ease: "easeOut" } }}
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

                    {/*  <button className="button-link" type="submit" disabled={isSubmitting}>

                            <motion.span


                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 1, ease: "easeInOut" } }}
                                exit={{ opacity: 0, transition: { duration: 0.5 } }} // Exit with a quicker fade-out
                            >
                                {buttonText}
                            </motion.span>

                        </button> */}

                    <MinButton text={buttonText} isButton={true} isSubmitting={isSubmitting} />
                    <span ref={notificationRef} className="notification">{popupText}</span>

                </motion.form>

                <div className="svg-area">
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.7, ease: "easeOut" } }}
                        href="https://github.com/huss535" target="_blank" rel="noopener noreferrer">
                        <div className="icon" style={{ maskImage: `url(${github})`, WebkitMaskImage: `url(${github})` }} />

                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.8, ease: "easeOut" } }}
                        href="https://medium.com/@efar3200" target="_blank" rel="noopener noreferrer">
                        <div className="icon" style={{ maskImage: `url(${medium})`, WebkitMaskImage: `url(${medium})` }} />

                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.9, ease: "easeOut" } }}
                        href="https://www.linkedin.com/in/elhussin-y-2643301a0/" target="_blank" rel="noopener noreferrer">
                        <div className="icon" style={{ maskImage: `url(${linkedin})`, WebkitMaskImage: `url(${linkedin})` }} />

                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.9, ease: "easeOut" } }}
                        href="https://www.discordapp.com/users/1322485289121222686" target="_blank" rel="noopener noreferrer">
                        <div className="icon" style={{ maskImage: `url(${discord})`, WebkitMaskImage: `url(${discord})` }} />

                    </motion.a>

                </div>
            </div>


        </motion.div>



    );
};

export default Connect;
