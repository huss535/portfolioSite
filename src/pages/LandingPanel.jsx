import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import projectsIcon from "../assets/projects.svg";
import blogsIcon from "../assets/blogs.svg";
import socialsIcon from "../assets/socials.svg";

const TableOfContentItem = ({ text, imgSrc, onClick }) => (
    <div className="table-of-contents-grid" onClick={onClick} role="button" tabIndex={0}>
        <span>{text}</span>
        <img src={imgSrc} alt={text} />
    </div>
);

const LandingPanel = () => {
    const navigate = useNavigate();
    const handleNavigation = (route) => {
        navigate(route);
    }

    return (
        <div className="page" id="landing-panel">
            <section className="hero">
                <h1>Elhussin Farah</h1>
            </section>

            <section className="table-of-contents">
                <h1>Table of Content</h1>
                <nav id="table-content-grid">
                    <TableOfContentItem
                        text="#1 About Me"
                        imgSrc={logo}
                        onClick={() => handleNavigation("/aboutPage")}
                    />
                    <TableOfContentItem
                        text="#2 Projects"
                        imgSrc={projectsIcon}
                        onClick={() => handleNavigation("/projects")}
                    />
                    <TableOfContentItem
                        text="#3 Blog"
                        imgSrc={blogsIcon}
                        onClick={() => handleNavigation("/blogs")}
                    />
                    <TableOfContentItem
                        text="#4 Connect"
                        imgSrc={socialsIcon}
                        onClick={() => handleNavigation("/connect")}
                    />
                </nav>
            </section>
        </div>
    );
};

export default LandingPanel;
