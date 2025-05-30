
import { motion } from "motion/react"

import MinButton from "../components/MinButton";
import { useEffect } from "react";
import HamMenu from "../components/HamMenu";

// eslint-disable-next-line react/prop-types
function ProjectsPage({ openMenu }) {



    const projects = [
        {
            title: "Weather Wizard",

            description: "A real-time weather app that offers live updates, detailed forecasts, interactive maps, and location searches. It also features a customizable assistant modeled after your favorite movie character to deliver weather updates with personality and flair.",
            techStack: ["Flutter", "Dart", "GeminiAPI"],
            githubRepo: "https://github.com/huss535/weatherApp",
            liveSite: ""
        },
        {
            title: "Scan2Eat",

            description: "A web app that allows you to scan ingredients and get recipes based on what you have",
            techStack: ["React", "Firebase", "Typescript"],
            githubRepo: "https://github.com/huss535/scan2Eat",
            liveSite: ""
        }, {
            title: "Game of Trivia",

            description: "An AI-powered trivia quiz game that allows users to access questions on any topic of their choice.",
            techStack: ["React", "Express", "Typescript", "PostgreSQL"],
            githubRepo: "https://github.com/huss535/gameOfTrivia",
            liveSite: ""
        }
    ];

    // image pre-rendering component
    const preloadImages = (imageUrls) => {
        imageUrls.forEach((url) => {
            const img = new Image();
            img.src = url;
        });
    };

    useEffect(() => {
        preloadImages([
            projects[0].img,
            projects[1].img
        ]);
    }, [projects]);


    return (


        <motion.div
            className="centered-page"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}


        >


            <div id="projects-shape-1">




            </div>

            <div className={openMenu ? `mobile-nav-shape-opened` : ("")}>



            </div>
            <div id="mobile-nav-shape"> </div>



            <div id="projects-page" className="page-margins">
                {/*   <TopNav isLightMode={isLightMode} setIsLightMode={setIsLightMode} /> */}

                {projects.map((project, index) => (
                    /*  <div key={index} className="project-container"> */

                    <div key={index} className={`container-style project-container-content`}>
                        <h1 >
                            {project.title}

                        </h1>
                        <div className="categories">

                            {project.techStack.map((category, catIndex) => (
                                <span key={catIndex} className="category-area">
                                    {category}
                                </span>
                            ))}

                        </div>

                        <p >
                            {project.description}
                        </p>




                        <MinButton text="Source Code" link={project.githubRepo} />




                    </div>



                    /* </div> */
                ))}


            </div>

        </motion.div>



    );
}



export default ProjectsPage;
