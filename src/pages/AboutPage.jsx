/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TopNav from '../components/TopNav';
import { motion } from "motion/react"

const boxShadowStyle = "0.0625rem -0.0625rem 0 0 var(--color-accent), 0.075rem -0.075rem 0 0 var(--color-accent), 0.0875rem -0.0875rem 0 0 var(--color-accent), 0.1rem -0.1rem 0 0 var(--color-accent), 0.1125rem -0.1125rem 0 0 var(--color-accent), 0.125rem -0.125rem 0 0 var(--color-accent), 0.1375rem -0.1375rem 0 0 var(--color-accent), 0.15rem -0.15rem 0 0 var(--color-accent), 0.1625rem -0.1625rem 0 0 var(--color-accent), 0.175rem -0.175rem 0 0 var(--color-accent), 0.1875rem -0.1875rem 0 0 var(--color-accent), 0.2rem -0.2rem 0 0 var(--color-accent), 0.2125rem -0.2125rem 0 0 var(--color-accent), 0.225rem -0.225rem 0 0 var(--color-accent), 0.2375rem -0.2375rem 0 0 var(--color-accent), 0.25rem -0.25rem 0 0 var(--color-accent), 0.2625rem -0.2625rem 0 0 var(--color-accent), 0.275rem -0.275rem 0 0 var(--color-accent), 0.2875rem -0.2875rem 0 0 var(--color-accent), 0.3rem -0.3rem 0 0 var(--color-accent), 0.3125rem -0.3125rem 0 0 var(--color-accent), 0.325rem -0.325rem 0 0 var(--color-accent), 0.3375rem -0.3375rem 0 0 var(--color-accent), 0.35rem -0.35rem 0 0 var(--color-accent), 0.3625rem -0.3625rem 0 0 var(--color-accent), 0.375rem -0.375rem 0 0 var(--color-accent), 0.3875rem -0.3875rem 0 0 var(--color-accent), 0.4rem -0.4rem 0 0 var(--color-accent), 0.4125rem -0.4125rem 0 0 var(--color-accent), 0.425rem -0.425rem 0 0 var(--color-accent), 0.4375rem -0.4375rem 0 0 var(--color-accent), 0.45rem -0.45rem 0 0 var(--color-accent), 0.4625rem -0.4625rem 0 0 var(--color-accent), 0.475rem -0.475rem 0 0 var(--color-accent), 0.4875rem -0.4875rem 0 0 var(--color-accent), 0.5rem -0.5rem 0 0 var(--color-accent), 0.5125rem -0.5125rem 0 0 var(--color-accent), 0.525rem -0.525rem 0 0 var(--color-accent), 0.5375rem -0.5375rem 0 0 var(--color-accent), 0.55rem -0.55rem 0 0 var(--color-accent), 0.5625rem -0.5625rem 0 0 var(--color-accent), 0.575rem -0.575rem 0 0 var(--color-accent), 0.5875rem -0.5875rem 0 0 var(--color-accent), 0.6rem -0.6rem 0 0 var(--color-accent), 0.6125rem -0.6125rem 0 0 var(--color-accent), 0.625rem -0.625rem 0 0 var(--color-accent), 0.6375rem -0.6375rem 0 0 var(--color-accent), 0.65rem -0.65rem 0 0 var(--color-accent), 0.6625rem -0.6625rem 0 0 var(--color-accent), 0.675rem -0.675rem 0 0 var(--color-accent), 0.6875rem -0.6875rem 0 0 var(--color-accent), 0.7rem -0.7rem 0 0 var(--color-accent), 0.7125rem -0.7125rem 0 0 var(--color-accent),0.725rem -0.725rem 0 0 var(--color-accent), 0.7375rem -0.7375rem 0 0 var(--color-accent), 0.75rem -0.75rem 0 0 var(--color-accent)";


function AboutPage({ isLightMode, setIsLightMode }) {



    const skillsArray = ["Aws", "Firebase",
        "Flutter", "React", "HTML", "CSS", "Postgresql", "Typescript"
    ]


    const navigate = useNavigate();
    const handleNavigation = (route) => {
        navigate(route);
    }



    /*     const headerShadowStyle = "-0.0625rem 0.0625rem 0 0 var(--color-accent), -0.075rem 0.075rem 0 0 var(--color-accent), -0.0875rem 0.0875rem 0 0 var(--color-accent), -0.1rem 0.1rem 0 0 var(--color-accent), -0.1125rem 0.1125rem 0 0 var(--color-accent), -0.125rem 0.125rem 0 0 var(--color-accent), -0.1375rem 0.1375rem 0 0 var(--color-accent), -0.15rem 0.15rem 0 0 var(--color-accent), -0.1625rem 0.1625rem 0 0 var(--color-accent), -0.175rem 0.175rem 0 0 var(--color-accent), -0.1875rem 0.1875rem 0 0 var(--color-accent), -0.2rem 0.2rem 0 0 var(--color-accent), -0.2125rem 0.2125rem 0 0 var(--color-accent), -0.225rem 0.225rem 0 0 var(--color-accent), -0.2375rem 0.2375rem 0 0 var(--color-accent), -0.25rem 0.25rem 0 0 var(--color-accent), -0.2625rem 0.2625rem 0 0 var(--color-accent), -0.275rem 0.275rem 0 0 var(--color-accent), -0.2875rem 0.2875rem 0 0 var(--color-accent), -0.3rem 0.3rem 0 0 var(--color-accent), -0.3125rem 0.3125rem 0 0 var(--color-accent), -0.325rem 0.325rem 0 0 var(--color-accent), -0.3375rem 0.3375rem 0 0 var(--color-accent), -0.35rem 0.35rem 0 0 var(--color-accent), -0.3625rem 0.3625rem 0 0 var(--color-accent), -0.375rem 0.375rem 0 0 var(--color-accent), -0.3875rem 0.3875rem 0 0 var(--color-accent), -0.4rem 0.4rem 0 0 var(--color-accent), -0.4125rem 0.4125rem 0 0 var(--color-accent), -0.425rem 0.425rem 0 0 var(--color-accent), -0.4375rem 0.4375rem 0 0 var(--color-accent), -0.45rem 0.45rem 0 0 var(--color-accent), -0.4625rem 0.4625rem 0 0 var(--color-accent), -0.475rem 0.475rem 0 0 var(--color-accent), -0.4875rem 0.4875rem 0 0 var(--color-accent), -0.5rem 0.5rem 0 0 var(--color-accent), -0.5125rem 0.5125rem 0 0 var(--color-accent), -0.525rem 0.525rem 0 0 var(--color-accent), -0.5375rem 0.5375rem 0 0 var(--color-accent), -0.55rem 0.55rem 0 0 var(--color-accent), -0.5625rem 0.5625rem 0 0 var(--color-accent), -0.575rem 0.575rem 0 0 var(--color-accent), -0.5875rem 0.5875rem 0 0 var(--color-accent), -0.6rem 0.6rem 0 0 var(--color-accent), -0.6125rem 0.6125rem 0 0 var(--color-accent), -0.625rem 0.625rem 0 0 var(--color-accent), -0.6375rem 0.6375rem 0 0 var(--color-accent), -0.65rem 0.65rem 0 0 var(--color-accent), -0.6625rem 0.6625rem 0 0 var(--color-accent), -0.675rem 0.675rem 0 0 var(--color-accent), -0.6875rem 0.6875rem 0 0 var(--color-accent), -0.7rem 0.7rem 0 0 var(--color-accent), -0.7125rem 0.7125rem 0 0 var(--color-accent), -0.725rem 0.725rem 0 0 var(--color-accent), -0.7375rem 0.7375rem 0 0 var(--color-accent), -0.75rem 0.75rem 0 0 var(--color-accent)";
     */

    return (



        <motion.div
            className="centered-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >


            <div id="aboutme-page" className='page-margins'>
                <motion.h1
                    /*    initial={{ boxShadow: "0px 0px 0px var(--color-background)" }}
                       animate={{ boxShadow: headerShadowStyle, transition: { duration: 1, delay: 0.2 } }}
                       exit={{ opacity: 0, transition: { duration: 0.4 } }} */
                    id="my-name"
                    /* className='container-shadow-left' */>

                    <motion.span

                        initial={{ opacity: 0, translateX: '-10px' }}
                        animate={{ opacity: 1, translateX: '0px', transition: { duration: 0.5, delay: 0.3 } }}

                    >
                        ELHUSSIN FARAH

                    </motion.span>

                </motion.h1>

                <motion.p
                    initial={{ boxShadow: "0px 0px 0px var(--color-background)" }}
                    animate={{ boxShadow: boxShadowStyle, transition: { duration: 1, delay: 0.4 } }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}

                    id="intro-section"
                    className='container-shadow-right'>
                    <motion.span
                        initial={{ opacity: 0, translateY: '10px' }}
                        animate={{ opacity: 1, translateY: '0px', transition: { duration: 0.5, delay: 0.5 } }}
                    >
                        I am a passionate tech enthusiast, captivated by every aspect of software creation—from crafting compelling narratives and immersive experiences to building robust full-stack solutions and designing scalable cloud architectures. Oh, and I love writing about these topics! Feel free to check out some of my work.
                    </motion.span>
                </motion.p>


                <motion.p
                    initial={{ boxShadow: "0px 0px 0px var(--color-background)" }}
                    animate={{ boxShadow: boxShadowStyle, transition: { duration: 1, delay: 0.6 } }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}

                    id='favourites-1'
                    className='container-style container-shadow-right'
                >
                    <motion.span
                        initial={{ opacity: 0, translateY: '10px' }}
                        animate={{ opacity: 1, translateY: '0px', transition: { duration: 0.5, delay: 0.7 } }}
                    >
                        Software of Choice
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, translateY: '10px' }}
                        animate={{ opacity: 1, translateY: '0px', transition: { duration: 0.5, delay: 0.75 } }}
                    >
                        Canva
                    </motion.span>

                </motion.p>
                <motion.p
                    initial={{ boxShadow: "0px 0px 0px var(--color-background)" }}
                    animate={{ boxShadow: boxShadowStyle, transition: { duration: 1, delay: 0.8 } }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                    id='favourites-2'
                    className='container-style container-shadow-right pattern-background'>
                    <motion.span
                        initial={{ opacity: 0, translateY: '10px' }}
                        animate={{ opacity: 1, translateY: '0px', transition: { duration: 0.5, delay: 0.85 } }}
                    >Favourite Band</motion.span>
                    <motion.span
                        initial={{ opacity: 0, translateY: '10px' }}
                        animate={{ opacity: 1, translateY: '0px', transition: { duration: 0.5, delay: 0.9 } }}
                    >The Breeders
                    </motion.span>

                </motion.p>
                <motion.p
                    initial={{ boxShadow: "0px 0px 0px var(--color-background)" }}
                    animate={{ boxShadow: boxShadowStyle, transition: { duration: 1, delay: 1 } }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                    id='favourites-3'
                    className='container-style container-shadow-right pattern-background'>
                    <motion.span
                        initial={{ opacity: 0, translateY: '10px' }}
                        animate={{ opacity: 1, translateY: '0px', transition: { duration: 0.5, delay: 1.1 } }}
                    >
                        Desert Island Book
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, translateY: '10px' }}
                        animate={{ opacity: 1, translateY: '0px', transition: { duration: 0.5, delay: 1.15 } }}
                    >Frankenstein</motion.span>
                </motion.p>


                <motion.div
                    initial={{ boxShadow: "0px 0px 0px var(--color-background)" }}
                    animate={{ boxShadow: boxShadowStyle, transition: { duration: 1, delay: 1.2 } }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                    id="skills-body"
                    className='container-style container-shadow-right'>
                    {skillsArray.map((skill, index) => (
                        <motion.div
                            initial={{ opacity: 0, translateY: '10px' }}
                            animate={{ opacity: 1, translateY: '0px', transition: { duration: 0.5, delay: 1.2 + (index / 10) } }}
                            className="skill-item"
                            key={index}>
                            <img src={`src/assets/skills/${skill}.svg`} alt={`${skill} icon`} />
                            {/*    <span>{skill.toLowerCase()}</span> */}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>






    );
}




export default AboutPage;
