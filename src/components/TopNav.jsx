import { useNavigate, NavLink } from "react-router-dom";
import moonIcon from '../assets/dark.svg';
import sunIcon from '../assets/light.svg';
import { useState } from "react";
const TopNav = ({ isLightMode, setIsLightMode }) => {
    const navigate = useNavigate();
    const [spinning, setIsSpinning] = useState(false);
    const handleNavigation = (route) => {
        navigate(route);
    }

    const handletoggle = () => {

        setIsLightMode((prev) => { return !prev; })

        setIsSpinning(true);
        setTimeout(() => setIsSpinning(false), 500); // Matching CSS animation duration


    };


    return (<nav className='nav-bar'>
        <div id='theme-icon'>
            <img

                onClick={handletoggle}
                className={spinning ? 'spin' : ""}
                src={!isLightMode ? moonIcon : sunIcon}
                alt={!isLightMode ? 'Dark Mode' : 'Light Mode'}

            />

        </div>



        {/*  <a className="link"
            onClick={() => handleNavigation("/")}
        >About me</a> */}
        <NavLink
            to="/"
            className={({ isActive }) => isActive ? "link link-active" : "link"}
        >
            ABOUT
        </NavLink>
        <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? "link link-active" : "link"}
        >
            PROJECTS
        </NavLink>
        <NavLink
            to="/blogs"
            className={({ isActive }) => isActive ? "link link-active" : "link"}
        >
            BLOG
        </NavLink>
        <NavLink
            to="/connect"
            className={({ isActive }) => isActive ? "link link-active" : "link"}
        >
            CONTACT
        </NavLink>

















    </nav>
    );
}

export default TopNav;