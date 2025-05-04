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
import { useEffect } from "react"



function AboutPage() {

    const boxShadowStyle = "inset 0 0 0.5rem rgba(255, 255, 255, 0.05), 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.6), -0.0125rem -0.0125rem 0 0 var(--color-accent), -0.025rem -0.025rem 0 0 var(--color-accent), -0.0375rem -0.0375rem 0 0 var(--color-accent), -0.05rem -0.05rem 0 0 var(--color-accent), -0.0625rem -0.0625rem 0 0 var(--color-accent), -0.075rem -0.075rem 0 0 var(--color-accent), -0.0875rem -0.0875rem 0 0 var(--color-accent), -0.1rem -0.1rem 0 0 var(--color-accent), -0.1125rem -0.1125rem 0 0 var(--color-accent), -0.125rem -0.125rem 0 0 var(--color-accent), -0.1375rem -0.1375rem 0 0 var(--color-accent), -0.15rem -0.15rem 0 0 var(--color-accent), -0.1625rem -0.1625rem 0 0 var(--color-accent), -0.175rem -0.175rem 0 0 var(--color-accent), -0.1875rem -0.1875rem 0 0 var(--color-accent), -0.2rem -0.2rem 0 0 var(--color-accent), -0.2125rem -0.2125rem 0 0 var(--color-accent), -0.225rem -0.225rem 0 0 var(--color-accent), -0.2375rem -0.2375rem 0 0 var(--color-accent), -0.25rem -0.25rem 0 0 var(--color-accent), -0.2625rem -0.2625rem 0 0 var(--color-accent), -0.275rem -0.275rem 0 0 var(--color-accent), -0.2875rem -0.2875rem 0 0 var(--color-accent), -0.3rem -0.3rem 0 0 var(--color-accent), -0.3125rem -0.3125rem 0 0 var(--color-accent), -0.325rem -0.325rem 0 0 var(--color-accent), -0.3375rem -0.3375rem 0 0 var(--color-accent), -0.35rem -0.35rem 0 0 var(--color-accent), -0.3625rem -0.3625rem 0 0 var(--color-accent), -0.375rem -0.375rem 0 0 var(--color-accent), -0.3875rem -0.3875rem 0 0 var(--color-accent), -0.4rem -0.4rem 0 0 var(--color-accent), -0.4125rem -0.4125rem 0 0 var(--color-accent), -0.425rem -0.425rem 0 0 var(--color-accent), -0.4375rem -0.4375rem 0 0 var(--color-accent), -0.45rem -0.45rem 0 0 var(--color-accent), -0.4625rem -0.4625rem 0 0 var(--color-accent), -0.475rem -0.475rem 0 0 var(--color-accent), -0.4875rem -0.4875rem 0 0 var(--color-accent), -0.5rem -0.5rem 0 0 var(--color-accent), -0.5125rem -0.5125rem 0 0 var(--color-accent), -0.525rem -0.525rem 0 0 var(--color-accent), -0.5375rem -0.5375rem 0 0 var(--color-accent), -0.55rem -0.55rem 0 0 var(--color-accent), -0.5625rem -0.5625rem 0 0 var(--color-accent), -0.575rem -0.575rem 0 0 var(--color-accent), -0.5875rem -0.5875rem 0 0 var(--color-accent), -0.6rem -0.6rem 0 0 var(--color-accent), -0.6125rem -0.6125rem 0 0 var(--color-accent), -0.625rem -0.625rem 0 0 var(--color-accent), -0.6375rem -0.6375rem 0 0 var(--color-accent), -0.65rem -0.65rem 0 0 var(--color-accent), -0.6625rem -0.6625rem 0 0 var(--color-accent), -0.675rem -0.675rem 0 0 var(--color-accent), -0.6875rem -0.6875rem 0 0 var(--color-accent), -0.7rem -0.7rem 0 0 var(--color-accent), -0.7125rem -0.7125rem 0 0 var(--color-accent), -0.725rem -0.725rem 0 0 var(--color-accent), -0.7375rem -0.7375rem 0 0 var(--color-accent), -0.75rem -0.75rem 0 0 var(--color-accent)";



    const skillsArray = [{ img: aws, label: "AWS" },
    { img: flutter, label: "FLUTTER" }, { img: react, label: "REACT" }, { img: html, label: "HTML" }, { img: css, label: "CSS" },
    { img: postgresql, label: "POSTGRESQL" }, { img: typescript, label: "TYPESCRIPT" }
    ]

    // image pre-rendering, load images into cache
    useEffect(() => {
        const skillImages = [
            aws, flutter, react, html, css, postgresql, typescript
        ];

        skillImages.forEach((imgSrc) => {
            const img = new Image();
            img.src = imgSrc;
        });
    }, []);


    return (



        <motion.div
            className="centered-page"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}

        >


            <div id="aboutme-page" className='page-margins'>
                <h1
                    /*    initial={{ boxShadow: "0px 0px 0px var(--color-background)" }}
                       animate={{ boxShadow: headerShadowStyle, transition: { duration: 1, delay: 0.28 } }}
                       exit={{ opacity: 0, transition: { duration: 0.4 } }} */
                    id="my-name"



                    /* className='container-shadow-left' */>

                    <span


                    >
                        ELHUSSIN FARAH

                    </span>

                </h1>
                <motion.div
                    id="intro-section"
                    className='container-style container-shadow-left'
                    initial={{ boxShadow: "none" }}
                    animate={{ boxShadow: boxShadowStyle, transition: { duration: 1, delay: 0.35 } }}
                /*   exit={{ opacity: 0, transition: { duration: 1 } }} */
                >
                    <p


                    /*   id="intro-section" */
                    >


                        {/*  <span */}

                        {/* > */}

                        I’m a caffeine-fueled full-stack dev and UX designer who loves all things cloud tech, enjoys building cool stuff, and writes for fun.


                    </p>




                </motion.div>


                <motion.p


                    id='favourites-1'
                    className='container-style container-shadow-left'
                    style={{ gap: '0.5rem' }}

                    initial={{ boxShadow: "none" }}
                    animate={{ boxShadow: boxShadowStyle, transition: { duration: 1, delay: 0.55 } }}
                >
                    <span

                    >
                        Currently Learning
                    </span>
                    <span

                    >
                        Three.js
                    </span>

                </motion.p>
                <motion.p

                    id='favourites-2'
                    className='container-style container-shadow-left pattern-background'
                    style={{ gap: '0.5rem' }}

                    initial={{ boxShadow: "none" }}
                    animate={{ boxShadow: boxShadowStyle, transition: { duration: 1, delay: 0.75 } }}
                >
                    <span

                    >Favourite Band</span>
                    <span

                    >The Breeders
                    </span>

                </motion.p>
                <motion.p

                    id='favourites-3'
                    className='container-style container-shadow-left pattern-background'
                    style={{ gap: '0.5rem' }}

                    initial={{ boxShadow: "none" }}
                    animate={{ boxShadow: boxShadowStyle, transition: { duration: 1, delay: 0.95 } }}
                >
                    <span

                    >
                        Desert Island Book
                    </span>
                    <span

                    >Frankenstein</span>
                </motion.p>


                <motion.div

                    id="skills-body"
                    className='container-style container-shadow-left'

                    initial={{ boxShadow: "none" }}
                    animate={{ boxShadow: boxShadowStyle, transition: { duration: 1, delay: 1.15 } }}


                >
                    {skillsArray.map((skill, index) => (

                        <div

                            className="skill-item"
                            key={index}>
                            <img src={skill.img} alt={`${skill.label} icon`} />
                            <label style={{ color: "var(--color-text)" }}>{skill.label}</label>

                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.div>






    );
}




export default AboutPage;





