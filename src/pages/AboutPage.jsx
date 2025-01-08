/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moonIcon from '../assets/dark.svg';
import sunIcon from '../assets/light.svg';
import TopNav from '../components/TopNav';

function AboutPage({ isLightMode, setIsLightMode }) {



    const skillsArray = ["Aws", "Firebase", "Terraform",
        "Flutter", "Dart", "Framer", "React", "HTML", "CSS",
        "Node", "Postgresql", "Typescript"
    ]


    const navigate = useNavigate();
    const handleNavigation = (route) => {
        navigate(route);
    }



    const [navBg, setNavBg] = useState(false);
    /*     const [navTextColor, setNavTextColor] = useState("whitesmoke");
     */    /*     const [isDarkMode, setIsDarkMode] = useState(true);
*/
    const changeNavBg = () => {
        window.scrollY >= 20 ? setNavBg(true) : setNavBg(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => {
            window.removeEventListener('scroll', changeNavBg);
        }
    }, [])

    useEffect(() => {
        const element = document.getElementById("top-nav-overlay");
        if (element) {
            if (navBg) {
                element.style.setProperty("opacity", "1");
                /*   setNavTextColor("black"); */
            } else {
                element.style.setProperty("opacity", "0");
                /*   setNavTextColor("whitesmoke"); */
            }


        }

        /* console.log(element) */
    }, [navBg]);









    return (
        <>

            <TopNav isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
            <div className='centered-page'>
                {/* <nav className='nav'>
                    <h1>
                        About Me
                    </h1>
                    <div className="table-of-contents-grid">
                        <a
                            onClick={() => handleNavigation("/")}
                        >Home</a>


                    </div>
                  
               
                    <div className='theme-icon'>
                        <img
                            onClick={() => { setIsLightMode((prev) => { return !prev; }) }}
                            src={!isLightMode ? moonIcon : sunIcon}
                            alt={!isLightMode ? 'Dark Mode' : 'Light Mode'}
                            className={`${!isLightMode ? 'rotate-icon' : ''}`}
                        />

                    </div>


                  



                    <div className="table-of-contents-grid">
                        <a

                            onClick={() => handleNavigation("/projects")}
                        > Projects</a>


                    </div>
                </nav> */}

                <div id="aboutme-page">




                    <p id='intro-section'>
                        Storytelling is at the heart of everything I do—it's my North Star.
                        I believe good software gets the job done and delivers value, but great software connects with your audience through a compelling narrative.
                        I'm captivated by every step of creating an immersive digital experience—from designing a seamless user journey to developing a polished UI and a robust, scalable backend.
                        I'm also an aspiring content creator because, well... storytelling is in my DNA.
                    </p>

                    <h1 id='my-name'>Elhussin Farah</h1>



                    {/*  <h2

                        id="first-interest"
                    >
                        <span>{texts[0]}</span>

                    </h2>

                    <h2

                        id="second-interest"
                    >
                        <span>{texts[1]}</span>

                    </h2>
                    <h2
                        id="third-interest"

                    >
                        <span>{texts[2]}</span>

                    </h2>


                    <h2

                        id="fourth-interest"
                    >
                        <span>{texts[3]}</span>
                    </h2> */}
                    <div id="skills-body">


                        {skillsArray.map((skill, index) => {
                            return (
                                <div className="skill-item" key={index}>
                                    <img src={`src/assets/skills/${skill}.svg`} />

                                </div>
                            )
                        })}



                    </div>



                </div>
                <div className='dot-background'></div>

            </div>




        </>
    );
}

export default AboutPage;
