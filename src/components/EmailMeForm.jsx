import { useState } from "react";
import axios from "axios";

const EmailMeForm = ({ setIsModalOpen, setErrorMessage }) => {
    const [formData, setFormData] = useState({ name: "", subject: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh on submit

        if (!formData.name || !formData.subject || !formData.message) {
            setErrorMessage("Please fill in all sections");
            setIsModalOpen(true);
            return;
        }

        setIsSubmitting(true);

        axios.post("https://n66mnx3j52.execute-api.us-east-1.amazonaws.com/sendMessage", {
            name: formData.name,
            subject: formData.subject,
            body_text: formData.message,
        })
            .then(() => {
                setErrorMessage("Thank you for your message, I'll get back to you as soon as I can :)");
                setIsModalOpen(true);
                setFormData({ name: "", subject: "", message: "" });
            })
            .catch((error) => {
                setErrorMessage("There was an error sending your message. Please try again.");
                setIsModalOpen(true);
                console.error(error);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <form className="card-container" onSubmit={handleSubmit}>
            {/*   <label htmlFor="name">Name</label> */}
            <textarea
                required
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="My name is ...."
                aria-label="Enter your name"
            />
            {/*  <label htmlFor="subject">Email</label> */}
            <textarea
                required
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="My email is..."
                aria-label="Enter the subject"
            />
            {/*  <label htmlFor="message">Message</label> */}
            <textarea
                required
                id="message"
                name="message"
                rows={8}
                value={formData.message}
                onChange={handleChange}
                placeholder="I want to talk to you about..."
                aria-label="Enter your message"
            />
            <div className="custom-shadow-button" type="submit" disabled={isSubmitting}>
                <button>
                    <span>{isSubmitting ? "Sending ..." : "Send Email"}</span>
                </button>
            </div>
        </form>
    );
};

export default EmailMeForm;
