import { motion } from "framer-motion";

const SideNav = ({ isOpen, setIsOpen }) => { // Add setIsOpen prop

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // Smooth scrolling
            });
        }
        setIsOpen(false); // Close the modal after scrolling
    };

    return (
        <motion.div
            id="nav-bar"
            role="navigation" // Accessibility improvement
            aria-label="Side navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <a
                className="nav-link"
                href="#about"
                onClick={() => setIsOpen(false)}
            >
                About Me
            </a>

            <a
                className="nav-link"
                href="#projects"
                onClick={() => setIsOpen(false)}
            >
                Projects
            </a>

            <a
                className="nav-link"
                href="#skills"
                onClick={() => setIsOpen(false)}

            >
                Skills
            </a>

            <a
                className="nav-link"
                href="#medium"
                onClick={() => setIsOpen(false)}
            >
                Medium
            </a>

            <a
                className="nav-link"
                href="#connect"
                onClick={() => setIsOpen(false)}
            >
                Connect
            </a>
        </motion.div>
    );
};

export default SideNav;
