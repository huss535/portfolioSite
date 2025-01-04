import { useNavigate } from "react-router-dom";
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


        <div className="table-of-contents-grid">
            <a
                onClick={() => handleNavigation("/")}
            >About me</a>


        </div>
        <div className="table-of-contents-grid">
            <a
                onClick={() => handleNavigation("/projects")}
            >Projects</a>


        </div>
        <div className="table-of-contents-grid">
            <a
                onClick={() => handleNavigation("/blogs")}
            >Blogs</a>


        </div>
        <div className="table-of-contents-grid">
            <a
                onClick={() => handleNavigation("/connect")}
            >Connect</a>


        </div>






        {/*   <div className="table-of-contents-grid" onClick={() => { setIsLightMode((prev) => { return !prev; }) }} > */}


        {/*  </div> */}




    </nav>
    );
}

export default TopNav;