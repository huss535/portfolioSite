import { HashRouter as Router } from "react-router-dom";
import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import TopNav from "./components/TopNav";
import moonIcon from './assets/dark.svg';
import sunIcon from './assets/light.svg';
import { NavLink } from "react-router-dom";

function App() {
  const [isLightMode, setIsLightMode] = useState(false); // dark mode / light mode switch
  const [blogsArray, setBlogsArray] = useState([]); // medium articles array
  const [openMenu, setOpenMenu] = useState(false);

  const [spinning, setIsSpinning] = useState(false);


  const handletoggle = () => {

    setIsLightMode((prev) => { return !prev; })

    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 500); // Matching CSS animation duration


  };


  useEffect(() => {
    const root = document.documentElement;
    if (isLightMode) {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [isLightMode]);

  useEffect(() => {
    axios
      .get("https://n66mnx3j52.execute-api.us-east-1.amazonaws.com/getBlogs")
      .then((response) => {
        setBlogsArray(response.data || []);

      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);

      });
  }, []);
  return (
    <Router>





      <AnimatedRoutes openMenu={openMenu} blogsArray={blogsArray} />
      <TopNav isLightMode={isLightMode} setIsLightMode={setIsLightMode} />

      <div className="modal-nav">
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
          to="/designs"
          className={({ isActive }) => isActive ? "link link-active" : "link"}
        >
          DESIGNS
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
          CONNECT
        </NavLink>

      </div>
      <div id='theme-icon-mobile'>
        <img

          onClick={handletoggle}
          className={spinning ? 'spin' : ""}
          src={!isLightMode ? moonIcon : sunIcon}
          alt={!isLightMode ? 'Dark Mode' : 'Light Mode'}

        />

      </div>
    </Router>
  );
}

export default App;

