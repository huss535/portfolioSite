import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
function ProjectsPage({ isLightMode, setIsLightMode }) {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [currentImages, setCurrentImages] = useState([]);

    const navigate = useNavigate();


    const handleNavigation = (route) => {
        navigate(route);
    }

    const showOverlay = (images) => {
        const element = document.querySelector(".overlay")

        setCurrentImages(images);

        setOverlayVisible(true);
        element.style.left = "0";
        document.body.style.overflow = "hidden"; // Disable background scrolling
    };

    const hideOverlay = () => {
        const element = document.querySelector(".overlay")
        setOverlayVisible(false);
        element.style.left = '100%';
        document.body.style.overflow = "auto"; // Re-enable background scrolling
    };
    const projects = [
        {
            title: "WEATHER WIZARD",
            placeholder: "weatherWizard",
            description: "A real-time weather app that provides weather updates, interactive maps, and accurate forecasts, powered by the OpenWeather API.",
            techStack: ["Flutter", "Dart", "OpenWeather API"],
            images: [
                "https://personal-page-images-3200.s3.us-east-1.amazonaws.com/projects/weatherWizard/weatherWizard-1.png",
                "https://personal-page-images-3200.s3.us-east-1.amazonaws.com/projects/weatherWizard/weatherWizard-2.png",
                "https://personal-page-images-3200.s3.us-east-1.amazonaws.com/projects/weatherWizard/weatherWizard-3.png",
                "https://personal-page-images-3200.s3.us-east-1.amazonaws.com/projects/weatherWizard/weatherWizard-4.png"
            ],
            githubRepo: "https://github.com/huss535/weatherApp",
            liveSite: ""
        },
        {
            title: "GAME OF TRIVIA",
            placeholder: "gameOfTrivia",
            description: "A real-time multiplayer trivia quiz game where users compete to answer questions correctly within a time limit.",
            techStack: ["React", "Socket.IO", "Node.js", "PostgreSQL"],
            images: [
                "https://personal-page-images-3200.s3.us-east-1.amazonaws.com/projects/gameOfTrivia/gameOfTrivia-1.png",
                "https://personal-page-images-3200.s3.us-east-1.amazonaws.com/projects/gameOfTrivia/gameOfTrivia-2.png",
                "https://personal-page-images-3200.s3.us-east-1.amazonaws.com/projects/gameOfTrivia/gameOfTrivia-3.png",
                "https://personal-page-images-3200.s3.us-east-1.amazonaws.com/projects/gameOfTrivia/gameOfTrivia-4.png"
            ],
            githubRepo: "https://github.com/huss535/gameOfTrivia",
            liveSite: ""
        }
    ];

    return (
        <>

            <motion.div className='centered-page'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
                {/* <motion.div
                    className="dot-background"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                    transition={{
                        delay: 0.5, // Applies a global delay
                        duration: 0.8, // Applies a global duration
                    }}
                ></motion.div> */}

                <div id="projects-page" className="page-margins">
                    {/*   <TopNav isLightMode={isLightMode} setIsLightMode={setIsLightMode} /> */}

                    {projects.map((project, index) => (
                        <div key={index} className="project-container">

                            <h1 className={`${index % 2 === 0 ? "container-shadow-right" : "container-shadow-left"}`} >{project.title}</h1>
                            <div className={`project-container-content ${index % 2 === 0 ? "container-shadow-right" : "container-shadow-left"}`}>

                                <div className="categories">
                                    {project.techStack.map((category, catIndex) => (
                                        <span key={catIndex} className="category-area">
                                            {category}
                                        </span>
                                    ))}
                                </div>
                                <p >{project.description}</p>



                                <a
                                    className="button-link"
                                    href={project.githubRepo}
                                    target="_blank"
                                    rel="noopener noreferrer"

                                >REPO</a>




                            </div>

                            <img className={`${index % 2 === 0 ? "header-shadow-right" : "header-shadow-left"}`} src={`src/assets/project-images/${project.placeholder}.png`} />


                        </div>
                    ))}


                </div>

            </motion.div>


        </>
    );
}



export default ProjectsPage;
