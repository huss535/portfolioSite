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





function AboutPage() {



    const skillsArray = [{ img: aws, label: "AWS" },
    { img: flutter, label: "FLUTTER" }, { img: react, label: "REACT" }, { img: html, label: "HTML" }, { img: css, label: "CSS" },
    { img: postgresql, label: "POSTGRESQL" }, { img: typescript, label: "TYPESCRIPT" }
    ]





    return (



        <motion.div
            className="centered-page"
            initial={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
        >


            <div id="aboutme-page" className='page-margins'>
                <h1
                    /*    initial={{ boxShadow: "0px 0px 0px var(--color-background)" }}
                       animate={{ boxShadow: headerShadowStyle, transition: { duration: 1, delay: 0.2 } }}
                       exit={{ opacity: 0, transition: { duration: 0.4 } }} */
                    id="my-name"
                    /* className='container-shadow-left' */>

                    <span


                    >
                        ELHUSSIN FARAH

                    </span>

                </h1>
                <div id="intro-section">
                    <p


                        /*   id="intro-section" */
                        className='container-shadow-left'>


                        <span

                        >


                            I’m a highly caffeinated nerd with a passion for music and building sh*t. From full-stack web apps to cool cloud architectures, and even hilariously unnecessary projects ... I love creating. I’m also deeply invested in UX design, writing, and exploring new ideas. My exposure to diverse fields has shaped a unique, adaptive approach to problem-solving, and that’s exactly why you’ll want me on your team.

                            {/*     <span className="text-highlight">Who am I ?</span> <br />
                            I’m a caffeinated CS nerd with a music addiction and a consistent urge to build sh*t. Whether it’s scalable cloud creations, full-stack apps or something absurdly unnecessary. */}

                        </span>
                    </p>

                    {/*   <p


                        className='container-shadow-right'>


                        <span

                        >
                            <span className="text-highlight">What sets me apart?</span><br />

                            I’m constantly chasing foreign challenges, always building fresh worldviews to bring a unique perspective to every problem I tackle. This drive has led me to explore content writing, UX storytelling, and solving real-world business challenges. I’m technical at heart but endlessly empathetic about the messy, creative, and human side of life.

                        </span>
                    </p>
 */}


                </div>


                <p


                    id='favourites-1'
                    className='container-style container-shadow-left'
                    style={{ gap: '0.5rem' }}
                >
                    <span

                    >
                        Dream Job
                    </span>
                    <span

                    >
                        Sith Lord
                    </span>

                </p>
                <p

                    id='favourites-2'
                    className='container-style container-shadow-left pattern-background'
                    style={{ gap: '0.5rem' }}
                >
                    <span

                    >Favourite Band</span>
                    <span

                    >The Breeders
                    </span>

                </p>
                <p

                    id='favourites-3'
                    className='container-style container-shadow-left pattern-background'
                    style={{ gap: '0.5rem' }}
                >
                    <span

                    >
                        Desert Island Book
                    </span>
                    <span

                    >Frankenstein</span>
                </p>


                <div

                    id="skills-body"
                    className='container-style container-shadow-left'>
                    {skillsArray.map((skill, index) => (

                        <div

                            className="skill-item"
                            key={index}>
                            <img src={skill.img} alt={`${skill.label} icon`} />
                            <label style={{ color: "var(--color-text)" }}>{skill.label}</label>

                        </div>
                    ))}
                </div>
            </div>
        </motion.div>






    );
}




export default AboutPage;
