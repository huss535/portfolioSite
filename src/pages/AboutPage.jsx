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
                <div id="intro-section" className='container-shadow-left'>
                    <p


                    /*   id="intro-section" */
                    >


                        {/*  <span */}

                        {/* > */}


                        A highly caffeinated nerd passionate about music and crafting exciting digital experiences, whether through full-stack web apps, cloud architectures, or thoughtful UX design.


                    </p>




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
