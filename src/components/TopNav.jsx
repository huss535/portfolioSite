/* eslint-disable react/prop-types */
// src/components/TopNav.js


const TopNav = ({ scrollPosition, sectionRefs }) => {
    // Convert scrollPosition from 0-1 to 0-100%
    const scrollPercent = scrollPosition * 100;

    const handleScroll = (sectionKey) => {
        if (sectionRefs.current[sectionKey]) {
            sectionRefs.current[sectionKey].scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            id="top-nav"

        >

            <a className="link" href="#projectsSection" onClick={() => handleScroll('projects')}>Projects</a>
            <a className="link" href="#mediumSection" onClick={() => handleScroll('medium')}>Blog</a>
            <a className="link" href="#connectSection" onClick={() => handleScroll('connect')}>Connect</a>

        </nav>
    );
};

export default TopNav;
