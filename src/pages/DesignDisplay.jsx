import { motion } from "motion/react";
import indify from "../assets/designs/indify/indify_showcase.png";
import jbrekkie from "../assets/designs/jbrekkie/jbrekkie_showcase.png";
import jbrekkieOriginal from "../assets/designs/jbrekkie/jbrekkie_original.png";
import scan2eat from "../assets/designs/scan2eat/scan2eat_showcase.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const DesignDisplay = () => {
    const { designName } = useParams();
    // image pre-rendering, load images into cache
    const [imgSrc, setImgSrc] = useState(null);
    useEffect(() => {
        if (designName === "jbrekkie") {
            setImgSrc(jbrekkie);
        }
        else if (designName === "indify") {
            setImgSrc(indify);

        }
        else if (designName === "scan2eat") {
            setImgSrc(scan2eat);
        }

    }
        , [designName]);
    return (
        <motion.div
            className="centered-page"


            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}

        >


            <div
                id="design-display-page"
                className="page-margins"

            >
                <h1>{designName.toUpperCase()}</h1>
                {designName == "indify" ? (<p>
                    I decided to create this after tuning into a Twitch stream of a local musician. Their music was beautiful and captivating, and I kept thinking to myself, "More people should be listening to this."
                    <br /><br />
                    Indify is an original design for a mobile web app that analyzes your playlist and helps users discover underrated or independent artists.
                    <br /><br />
                    The design and pink-green color scheme are heavily inspired by The Clash's <em>London Calling</em> album and the punk movement—giving it a DIY, rough-around-the-edges feel.
                    <br /><br />
                    The user experience is meant to be simple and intuitive, guiding users through a linear journey to discover new music.
                </p>) : (
                    designName == "jbrekkie" ? (
                        <>
                            <p>
                                This is a redesign of the official Japanese Breakfast website, focusing on both UI and user experience improvements.
                                <br /><br />
                                The original experience felt bloated, with redundancies such as both the navbar's "Home" link and the band logo redirecting to the same page. Additionally, there was a lack of visual consistency, with variations in button styles across different sections.
                            </p>
                            <img src={jbrekkieOriginal} alt="Design" />
                            <p>
                                I also aimed to enhance the design to better reflect the aesthetic of the band's latest album, which draws heavy inspiration from Sally Potter's <em>Orlando</em> along with the emotional depth and vulnerability of the Romanticism movement.
                            </p>
                        </>

                    ) : (
                        <p>
                            Scan2Eat is an app that enables users to visit their local market, scan products, and instantly get recipe suggestions based on the ingredients they find. The idea came to me when I was broke and looking for creative ways to cook discounted canned lentils.
                            <br /><br />
                            The user experience is designed to be streamlined and minimalist, allowing users to quickly scan items and receive recipes without unnecessary distractions.
                        </p>

                    )
                )}


                <img src={imgSrc} alt="Design" />
            </div>
        </motion.div>
    );
}
export default DesignDisplay;