import { useState } from "react";
import axios from "axios";
import TopNav from "../components/TopNav";
const Connect = () => {


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

        <TopNav />

        <form id="connect-page" className="card-container" onSubmit={handleSubmit}>
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
            <button className="table-of-contents-grid" type="submit" disabled={isSubmitting}>

                <span>{isSubmitting ? "Sending ..." : "Send Email"}</span>

            </button>

        </form>

        <div className='dot-background'></div>


    </div>);
}

export default Connect;