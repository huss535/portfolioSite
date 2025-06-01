import React from 'react';
import { motion } from 'framer-motion';
import jbrekkie from '/Users/elhussin/trialScroller/src/assets/designs/jbrekkie.jpg';
import indify from '/Users/elhussin/trialScroller/src/assets/designs/indify.jpg';
import scan2eat from '/Users/elhussin/trialScroller/src/assets/designs/scan2eat.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const DesignsPage = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const handleClick = (designName) => {
        navigate(`/design/${designName}`);
    };
    return (
        <motion.div
            className="centered-page"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}

        >
            {/*             <div id="designs-shape" className={isHovered ? "designs-shape-change" : ""}></div>
 */}
            <div id='designs-page' className="page-margins">
                <div className="zigzag-pattern">




                </div>

                <div
                    onClick={() => handleClick("jbrekkie")}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}

                >

                    <img className='design-img' src={jbrekkie} alt="jbrekkie" />
                </div>

                <div onClick={() => handleClick("indify")}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}

                >

                    <img className='design-img' src={indify} alt="indify" />
                </div>

                <div onClick={() => handleClick("scan2eat")}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}

                >

                    <img className='design-img' src={scan2eat} alt="scan2eat" />
                </div>

            </div>

        </motion.div>
    );
}
export default DesignsPage;