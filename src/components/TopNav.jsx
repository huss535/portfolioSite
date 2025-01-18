import { useNavigate, NavLink } from "react-router-dom";
import moonIcon from '../assets/dark.svg';
import sunIcon from '../assets/light.svg';
const TopNav = ({ isLightMode, setIsLightMode }) => {
    const navigate = useNavigate();
    const handleNavigation = (route) => {
        navigate(route);
    }

    return (<nav className='nav-bar'>
        <div className='theme-icon'>
            <img
                onClick={() => { setIsLightMode((prev) => { return !prev; }) }}
                src={!isLightMode ? moonIcon : sunIcon}
                alt={!isLightMode ? 'Dark Mode' : 'Light Mode'}
                className={`${!isLightMode ? 'rotate-icon' : ''}`}
            />

        </div>



        {/*  <a className="link"
            onClick={() => handleNavigation("/")}
        >About me</a> */}
        <NavLink
            to="/"
            className={({ isActive }) => isActive ? "link link-active" : "link"}
        >
            ABOUT ME
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
            BLOGS
        </NavLink>
        <NavLink
            to="/connect"
            className={({ isActive }) => isActive ? "link link-active" : "link"}
        >
            CONTACT
        </NavLink>














        {/*   <div className="table-of-contents-grid" onClick={() => { setIsLightMode((prev) => { return !prev; }) }} > */}


        {/*  </div> */}




    </nav>
    );
}

export default TopNav;