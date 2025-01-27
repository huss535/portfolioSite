/* eslint-disable react/prop-types */

import AboutPage from "../pages/AboutPage";
import BlogsPage from "../pages/BlogsPage";
import ProjectsPage from "../pages/ProjectsPage";
import Connect from "../pages/Connect";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react"

const AnimatedRoutes = ({ blogsArray }) => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>

                <Route path="/" element={<AboutPage />} />
                <Route path="/blogs" element={<BlogsPage blogsArray={blogsArray} />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/connect" element={<Connect />} />

            </Routes>
        </AnimatePresence>);
}

export default AnimatedRoutes;