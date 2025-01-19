/* eslint-disable react/prop-types */

import AboutPage from "../pages/AboutPage";
import BlogsPage from "../pages/BlogsPage";
import ProjectsPage from "../pages/ProjectsPage";
import Connect from "../pages/Connect";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = ({ blogsArray, isLightMode, setIsLightMode }) => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>

                <Route path="/" element={<AboutPage isLightMode={isLightMode} setIsLightMode={setIsLightMode} />} />
                <Route path="/blogs" element={<BlogsPage blogsArray={blogsArray} isLightMode={isLightMode} setIsLightMode={setIsLightMode} />} />
                <Route path="/projects" element={<ProjectsPage isLightMode={isLightMode} setIsLightMode={setIsLightMode} />} />
                <Route path="/connect" element={<Connect isLightMode={isLightMode} setIsLightMode={setIsLightMode} />} />

            </Routes>
        </AnimatePresence>);
}

export default AnimatedRoutes;