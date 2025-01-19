/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TopNav from '../components/TopNav';
import { motion } from 'framer-motion';

function AboutPage({ isLightMode, setIsLightMode }) {



    const skillsArray = ["Aws", "Firebase",
        "Flutter", "React", "HTML", "CSS", "Postgresql", "Typescript"
    ]


    const navigate = useNavigate();
    const handleNavigation = (route) => {
        navigate(route);
    }










    return (



        <motion.div
            className="centered-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >


            <div id="aboutme-page" className='page-margins'>
                <h1 id="my-name" className='container-shadow-left'>ELHUSSIN FARAH</h1>

                <p id="intro-section" className='container-shadow-right pattern-background'>
                    I am a passionate tech enthusiast, captivated by every aspect of software creation—from crafting compelling narratives and immersive experiences to building robust full-stack solutions and designing scalable cloud architectures. Oh, and I love writing about these topics! Feel free to check out some of my work.
                </p>


                <p id='favourites-1' className='container-style container-shadow-right pattern-background'>
                    <span>Software of Choice</span> <span>Canva</span></p>
                <p id='favourites-2' className='container-style container-shadow-right pattern-background'><span>Favourite Band</span> <span>Pixies</span></p>
                <p id='favourites-3' className='container-style container-shadow-right pattern-background'> <span>Desert Island Book</span> <span>Frankenstein</span></p>


                <div id="skills-body" className='container-style container-shadow-right pattern-background'>
                    {skillsArray.map((skill, index) => (
                        <div className="skill-item" key={index}>
                            <img src={`src/assets/skills/${skill}.svg`} alt={`${skill} icon`} />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>






    );
}

export default AboutPage;
