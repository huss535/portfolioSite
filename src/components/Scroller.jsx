import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef, Children } from "react";

const Scroller = ({ id, children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });
    const animationControls = useAnimation();
    const sliderControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            animationControls.start("show");
            sliderControls.start("show");
        }
    }, [isInView, animationControls, sliderControls]);

    return (
        <div ref={ref} id={id} className="page-section">
            {Children.map(children, (child, index) => (
                <motion.div
                    key={index}
                    style={{ position: 'relative', overflow: 'hidden', width: '100%', marginBottom: '1rem' }}
                >
                    {/* Text animation */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={animationControls}
                        transition={{ duration: 1.8, delay: index * 0.6 }}
                    >
                        {child}
                    </motion.div>

                    {/* Yellow background animation */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            top: '10%',
                            bottom: '10%',
                            left: 0,
                            width: '100%',
                            backgroundColor: 'yellow',
                            zIndex: 2,
                        }}
                        variants={{
                            hidden: { left: '0%' },
                            show: { left: '100%' }
                        }}
                        initial="hidden"
                        animate={sliderControls}
                        transition={{ duration: 0.9, delay: index * 0.3 }}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default Scroller;
