import { motion } from "motion/react";
const DesignDisplay = () => {
    return (
        <motion.div
            className="centered-page"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}

        >

            <h1>ddd</h1>
        </motion.div>
    );
}
export default DesignDisplay;