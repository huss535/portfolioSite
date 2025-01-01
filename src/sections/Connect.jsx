/* eslint-disable no-undef */
import EmailMeForm from "../components/EmailMeForm";
import ErrorModal from "../components/ErrorModal";

import { useState, useEffect } from "react"
const Connect = ({ sectionRefs }) => {

    const [errorMessage, setErrorMessage] = useState(""); // Store error messages here
    const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility

    useEffect(() => {

        if (isModalOpen) {
            setTimeout(() => {
                setIsModalOpen(false)
            }, 3500);
        }
    }, [isModalOpen])
    return (
        <div ref={(sectionRef) => { sectionRefs.current.connect = sectionRef }} id="connect" className='page-section'>


            <div className='header'>
                <h1>Connect</h1>

            </div>



            <div className="section-content halftone">

                <EmailMeForm setIsModalOpen={setIsModalOpen} setErrorMessage={setErrorMessage} />

            </div>

            <div className="svg-area">

                {/*  <a href="tel:+642102243537" target="_blank" rel="noopener noreferrer">
                    <img src="src/assets/phone.svg" alt="Phone number" />
                </a> */}

                <div>
                    <a href="https://www.linkedin.com/in/elhussin-y-2643301a0/" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/linkedin.svg" alt="Linkedin Profile" />
                    </a>
                </div>
                <div>
                    <a href="https://medium.com/@efar3200" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/medium.svg" alt="Medium Profile" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/huss535" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/github.svg" alt="Medium Profile" />
                    </a>
                </div>
                {/*    <a href='https://drive.google.com/file/d/1LlpuWja_1oRcvLv93QX4MiKVxn8jSh9b/view?usp=sharing' target="_blank" rel="noopener noreferrer">
    <img src="src/assets/resume.svg" alt="Medium Profile" />

</a>*/}

            </div>
            {isModalOpen && <ErrorModal message={errorMessage} onClose={() => setIsModalOpen(false)} />}




        </div>
    );

}

export default Connect;