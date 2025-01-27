/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
import aws from '../assets/skills/Aws.svg'
import flutter from '../assets/skills/Flutter.svg'
import react from '../assets/skills/React.svg'
import html from '../assets/skills/HTML.svg'
import css from '../assets/skills/CSS.svg'
import postgresql from '../assets/skills/Postgresql.svg'
import typescript from '../assets/skills/Typescript.svg'



const boxShadowStyle = "0.0625rem -0.0625rem 0 0 var(--color-accent), 0.075rem -0.075rem 0 0 var(--color-accent), 0.0875rem -0.0875rem 0 0 var(--color-accent), 0.1rem -0.1rem 0 0 var(--color-accent), 0.1125rem -0.1125rem 0 0 var(--color-accent), 0.125rem -0.125rem 0 0 var(--color-accent), 0.1375rem -0.1375rem 0 0 var(--color-accent), 0.15rem -0.15rem 0 0 var(--color-accent), 0.1625rem -0.1625rem 0 0 var(--color-accent), 0.175rem -0.175rem 0 0 var(--color-accent), 0.1875rem -0.1875rem 0 0 var(--color-accent), 0.2rem -0.2rem 0 0 var(--color-accent), 0.2125rem -0.2125rem 0 0 var(--color-accent), 0.225rem -0.225rem 0 0 var(--color-accent), 0.2375rem -0.2375rem 0 0 var(--color-accent), 0.25rem -0.25rem 0 0 var(--color-accent), 0.2625rem -0.2625rem 0 0 var(--color-accent), 0.275rem -0.275rem 0 0 var(--color-accent), 0.2875rem -0.2875rem 0 0 var(--color-accent), 0.3rem -0.3rem 0 0 var(--color-accent), 0.3125rem -0.3125rem 0 0 var(--color-accent), 0.325rem -0.325rem 0 0 var(--color-accent), 0.3375rem -0.3375rem 0 0 var(--color-accent), 0.35rem -0.35rem 0 0 var(--color-accent), 0.3625rem -0.3625rem 0 0 var(--color-accent), 0.375rem -0.375rem 0 0 var(--color-accent), 0.3875rem -0.3875rem 0 0 var(--color-accent), 0.4rem -0.4rem 0 0 var(--color-accent), 0.4125rem -0.4125rem 0 0 var(--color-accent), 0.425rem -0.425rem 0 0 var(--color-accent), 0.4375rem -0.4375rem 0 0 var(--color-accent), 0.45rem -0.45rem 0 0 var(--color-accent), 0.4625rem -0.4625rem 0 0 var(--color-accent), 0.475rem -0.475rem 0 0 var(--color-accent), 0.4875rem -0.4875rem 0 0 var(--color-accent), 0.5rem -0.5rem 0 0 var(--color-accent), 0.5125rem -0.5125rem 0 0 var(--color-accent), 0.525rem -0.525rem 0 0 var(--color-accent), 0.5375rem -0.5375rem 0 0 var(--color-accent), 0.55rem -0.55rem 0 0 var(--color-accent), 0.5625rem -0.5625rem 0 0 var(--color-accent), 0.575rem -0.575rem 0 0 var(--color-accent), 0.5875rem -0.5875rem 0 0 var(--color-accent), 0.6rem -0.6rem 0 0 var(--color-accent), 0.6125rem -0.6125rem 0 0 var(--color-accent), 0.625rem -0.625rem 0 0 var(--color-accent), 0.6375rem -0.6375rem 0 0 var(--color-accent), 0.65rem -0.65rem 0 0 var(--color-accent), 0.6625rem -0.6625rem 0 0 var(--color-accent), 0.675rem -0.675rem 0 0 var(--color-accent), 0.6875rem -0.6875rem 0 0 var(--color-accent), 0.7rem -0.7rem 0 0 var(--color-accent), 0.7125rem -0.7125rem 0 0 var(--color-accent),0.725rem -0.725rem 0 0 var(--color-accent), 0.7375rem -0.7375rem 0 0 var(--color-accent), 0.75rem -0.75rem 0 0 var(--color-accent)";


function AboutPage() {



    const skillsArray = [aws,
        flutter, react, html, css, postgresql, typescript
    ]





    return (



        <motion.div
            className="centered-page"
            initial={{ opacity: 0, transition: { duration: 0.4 } }}
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
                <div id="intro-section">
                    <motion.p
                        initial={{ boxShadow: "0px 0px 0px var(--color-background)" }}
                        animate={{ boxShadow: boxShadowStyle, transition: { duration: 1, delay: 0.4 } }}
                        exit={{ opacity: 0, transition: { duration: 0.4 } }}

                        /*   id="intro-section" */
                        className='container-shadow-right'>


                        <motion.span
                            initial={{ opacity: 0, translateY: '10px' }}
                            animate={{ opacity: 1, translateY: '0px', transition: { duration: 0.5, delay: 0.5 } }}
                        >
                            <span className="text-highlight">Who am I ?</span> <br />
                            I’m a caffeinated CS nerd with a love for music and building cool things—whether they add tangible value or are just ridiculously fun. Full-stack development is the Mordor to my Sauron, but I’m always exploring new horizons like UX design, cloud architecture, and content writing.
                        </motion.span>
                    </motion.p>

                    <motion.p
                        initial={{ boxShadow: "0px 0px 0px var(--color-background)" }}
                        animate={{ boxShadow: boxShadowStyle, transition: { duration: 1, delay: 0.4 } }}
                        exit={{ opacity: 0, transition: { duration: 0.4 } }}

                        /*   id="intro-section" */
                        className='container-shadow-right'>


                        <motion.span
                            initial={{ opacity: 0, translateY: '10px' }}
                            animate={{ opacity: 1, translateY: '0px', transition: { duration: 0.5, delay: 0.5 } }}
                        >
                            <span className="text-highlight">What sets me apart?</span><br />

                            I’m a stubborn, self-aware empath whose happy place is diving headfirst into completely new fields where I know absolutely nothing, then building a fresh perspective from the ground up. My one rule? Question everything, choosing the red pill every single f#cking time.    </motion.span>
                    </motion.p>



                </div>


                <motion.p
                    initial={{ boxShadow: "0px 0px 0px var(--color-background)" }}
                    animate={{ boxShadow: boxShadowStyle, transition: { duration: 1, delay: 0.6 } }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}

                    id='favourites-1'
                    className='container-style container-shadow-right'
                    style={{ gap: '0.5rem' }}
                >
                    <motion.span
                        initial={{ opacity: 0, translateY: '10px' }}
                        animate={{ opacity: 1, translateY: '0px', transition: { duration: 0.5, delay: 0.7 } }}
                    >
                        Dream Job
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, translateY: '10px' }}
                        animate={{ opacity: 1, translateY: '0px', transition: { duration: 0.5, delay: 0.75 } }}
                    >
                        Sith Lord
                    </motion.span>

                </motion.p>
                <motion.p
                    initial={{ boxShadow: "0px 0px 0px var(--color-background)" }}
                    animate={{ boxShadow: boxShadowStyle, transition: { duration: 1, delay: 0.8 } }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                    id='favourites-2'
                    className='container-style container-shadow-right pattern-background'
                    style={{ gap: '0.5rem' }}
                >
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
                    className='container-style container-shadow-right pattern-background'
                    style={{ gap: '0.5rem' }}
                >
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
                            <img src={skill} alt={`${skill} icon`} />

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>






    );
}




export default AboutPage;
