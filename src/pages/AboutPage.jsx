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

            <div id="about-shape-1"></div>
            <div id="about-shape-2"></div>

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
                <div id="favourites-section">



                    <motion.p


                        id='favourites-1'
                        className='container-style '


                        initial={{ boxShadow: "none" }}
                    /*  animate={{ boxShadow: boxShadowStyle, transition: { duration: 1, delay: 0.55 } }} */
                    >
                        <span

                        >
                            Movement of Choice
                        </span>
                        <span

                        >
                            Surrealism
                        </span>

                    </motion.p>
                    <motion.p

                        id='favourites-2'
                        className='container-style container-shadow-left pattern-background'


                        initial={{ boxShadow: "none" }}

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


                        initial={{ boxShadow: "none" }}

                    >
                        <span

                        >
                            Desert Island Book
                        </span>
                        <span

                        >Frankenstein</span>
                    </motion.p>
                </div>

                <motion.div

                    id="skills-body"
                    className='container-style container-shadow-left'

                    initial={{ boxShadow: "none" }}


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





