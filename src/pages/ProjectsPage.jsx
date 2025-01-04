import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moonIcon from '../assets/dark.svg';
import sunIcon from '../assets/light.svg';
function ProjectsPage(isLightMode, setIsLightMode) {
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
            title: "Weather Wizard",
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
            title: "Game Of Trivia",
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
        <div id="projects-page">
            <nav className='nav'>
                <h1>
                    Projects
                </h1>
                <div className="table-of-contents-grid">
                    <a
                        onClick={() => handleNavigation("/")}
                    >Home</a>


                </div>
                {/* <div className="table-of-contents-grid">
                            <a href="#connect">Home</a>


                        </div> */}

                <div className="table-of-contents-grid" onClick={() => { setIsLightMode((prev) => { return !prev; }) }} >

                    <img
                        src={!isLightMode ? moonIcon : sunIcon}
                        alt={!isLightMode ? 'Dark Mode' : 'Light Mode'}
                        className={`theme-icon ${!isLightMode ? 'rotate-icon' : ''}`}
                    />


                </div>



                <div className="table-of-contents-grid">
                    <a

                        onClick={() => handleNavigation("/blogs")}
                    > Blogs</a>


                </div>
            </nav>
            {projects.map((project, index) => (
                <div key={index} className="project-container">
                    {/*  <div className="project-container-content"> */}
                    <h1>{project.title}</h1>
                    {/* <div className="project-container-body"> */}
                    <div className="categories">
                        {project.techStack.map((category, catIndex) => (
                            <span key={catIndex} className="category-area">
                                {category}
                            </span>
                        ))}
                    </div>

                    <p >{project.description}</p>
                    <div className="projects-links">
                        <div style={{ width: "fit-content" }} className="table-of-contents-grid">
                            <a
                                onClick={() => window.open(project.githubRepo)}

                            >Repo</a>


                        </div>
                        <div style={{ width: "fit-content" }} className="table-of-contents-grid">
                            <a
                                onClick={() => showOverlay(project.images)}

                            > Gallery </a>


                        </div>
                    </div>
                    {/* <div className="custom-shadow-button">
                            <button onClick={() => window.open(project.githubRepo)}><span>Repo</span></button>
                        </div>
                        <br /><br />
                        <div className="custom-shadow-button">
                            <button onClick={() => showOverlay(project.images)}><span>Gallery</span></button>
                        </div> */}

                    {/*  </div> */}
                    <br />
                    <br />
                </div>
            ))}

            {/*  {isOverlayVisible && ( */}
            <div className="overlay">
                <button onClick={hideOverlay} className="close-button">X</button>
                <div className="image-container">
                    {currentImages.map((image, index) => (
                        <img key={index} src={image} alt={`Project gallery image ${index}`} className="image" />
                    ))}
                </div>
            </div>
            {/*  )} */}
        </div>
    );
}



export default ProjectsPage;
