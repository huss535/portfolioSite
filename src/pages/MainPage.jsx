/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';


import AboutMe from '../sections/AboutMe';
import Connect from '../sections/Connect';
import TopNav from '../components/TopNav';
import Home from '../sections/Home';
import { useScroll } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import moonIcon from '../assets/dark.svg';
import sunIcon from '../assets/light.svg';

function MainPage({ isDarkMode, setIsDarkMode }) {

    const navigate = useNavigate();
    const sectionRefs = useRef({
        home: null,
        aboutMe: null,
        projects: null,
        medium: null,
        connect: null,
    });

    // Reference for the entire page
    const scrollRef = useRef(null);

    // Reference for the top navigation bar
    const topNavRef = useRef(null);

    // State for scroll progress
    const [scrollPercent, setScrollPercent] = useState(0);

    const [navBg, setNavBg] = useState(false);
    const [navTextColor, setNavTextColor] = useState("whitesmoke");
    /*     const [isDarkMode, setIsDarkMode] = useState(true);
     */
    const changeNavBg = () => {
        window.scrollY >= 20 ? setNavBg(true) : setNavBg(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => {
            window.removeEventListener('scroll', changeNavBg);
        }
    }, [])

    useEffect(() => {
        const element = document.getElementById("top-nav-overlay");
        if (element) {
            if (navBg) {
                element.style.setProperty("opacity", "1");
                setNavTextColor("black");
            } else {
                element.style.setProperty("opacity", "0");
                setNavTextColor("whitesmoke");
            }


        }

        /* console.log(element) */
    }, [navBg]);


    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDarkMode]);






    return (
        <>
            {/* Sticky Navigation Bar */}

            <nav
                ref={topNavRef}
                id='top-nav'


            >
                <div id='top-nav-overlay'

                >

                </div>
                <a onClick={() => { navigate("/projects") }} className="link">
                    Home
                </a>
                <a onClick={() => { navigate("/projects") }} className="link">
                    Projects
                </a>
                <a onClick={() => { navigate("/blogs") }} className="link">
                    Blog
                </a>


                <div id='switch' onClick={() => { setIsDarkMode((prev) => { return !prev; }) }} >
                    <img
                        src={isDarkMode ? moonIcon : sunIcon}
                        alt={isDarkMode ? 'Dark Mode' : 'Light Mode'}
                        className={`theme-icon ${isDarkMode ? 'rotate-icon' : ''}`}
                    />
                </div>

            </nav>

            {/* Page Content */}
            <div ref={scrollRef} id="page">
                <Home sectionRefs={sectionRefs} />
                <AboutMe sectionRefs={sectionRefs} />
                <Connect sectionRefs={sectionRefs} />
            </div>
        </>
    );
}

export default MainPage;
