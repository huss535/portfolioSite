/* eslint-disable react/prop-types */

const AboutMe = ({ sectionRefs }) => {


    const skillsArray = ["Aws", "Firebase", "Terraform",
        "Flutter", "Dart", "Framer", "React", "HTML", "CSS",
        "Node", "Postgresql", "Typescript"
    ]

    return (
        <div ref={(sectionRef) => { sectionRefs.current.aboutMe = sectionRef }} id="aboutme" className='page-section'>
            <div id="aboutme-header">
                <h1>About Me</h1>

            </div>




            <div className="section-content">
                {/* <div className="section-content-text"> */}


                <div className="section-content-text">
                    <p style={{ fontSize: "1.25rem" }}>
                        Storytelling is at the heart of everything I do—it's my North Star.
                        I believe good software gets the job done and delivers value, but great software connects with your audience through a compelling narrative.
                        I'm captivated by every step of creating an immersive digital experience—from designing a seamless user journey to developing a polished UI and a robust, scalable backend.
                        I'm also an aspiring content creator because, well... storytelling is in my DNA.
                    </p>
                </div>
                <div className="section-content-text">
                    <p style={{ fontSize: "2rem" }} >
                        Favourite software: Canva
                    </p>
                </div>
                <div className="section-content-text">
                    <p style={{ fontSize: "2rem" }} >
                        Go to music: Pixies
                    </p>
                </div>


            </div>
            {/*  </div> */}

            <div id="skills-header">
                <h2>My Toolkit</h2>
            </div>

            <div id="bottom-home">


                <div className="dot-background"></div>


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








        </div >
    );
}

export default AboutMe;
