import { useState, useEffect, useRef } from "react";

const Home = ({ sectionRefs }) => {
    const [index, setIndex] = useState(0);

    const texts = [
        "Full-Stack Developer",
        "Writer",
        "Cloud Enthusiast",
        "Designer",
    ];

    const intervalRef = useRef();

    useEffect(() => {
        // Set interval to update the index
        intervalRef.current = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % (texts.length + 1));

        }, 3000);

        // Clear interval on component unmount
        return () => clearInterval(intervalRef.current);
    }, [texts.length]);

    return (
        <div
            ref={(sectionRef) => {
                sectionRefs.current.home = sectionRef;
            }}
            id="home"
            className="page-section"
        >
            <div id="home-header">
                <h1>ELHUSSIN FARAH</h1>
            </div>
            <div className="section-content">
                <h2 id="section-title">
                    <span>I'm a ...</span>
                </h2>

                <h2
                    className={`${index === 0 ? "active" : ""}`}
                    id="first-interest"
                >
                    <span>{texts[0]}</span>

                </h2>
                <div id="second-interest">
                    <h2
                        className={`${index === 1 ? "active" : ""}`}
                    /*   id="second-interest" */
                    >
                        <span>{texts[1]}</span>
                        {/*   <div className="dot-background"></div> */}
                    </h2>
                    <h2
                        className={`${index === 2 ? "active" : ""}`}
                    /*  id="third-interest" */
                    >
                        <span>{texts[2]}</span>
                        {/*   <div className="dot-background"></div> */}
                    </h2>
                    <div className="dot-background"></div>
                </div>
                <h2
                    className={`${index === 3 ? "active" : ""}`}
                    id="fourth-interest"
                >
                    <span>{texts[3]}</span>
                </h2>
                {/*  <h2 className={`${index === 4 ? "active" : ""}`} id="scroll-indicator">
                    <span>Explore</span>
                    <div></div>
                </h2> */}
            </div>
        </div>
    );
};

export default Home;
