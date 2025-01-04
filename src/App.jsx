import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import AboutPage from "./pages/AboutPage";
import './App.css';
import BlogsPage from "./pages/BlogsPage";
import ProjectsPage from "./pages/ProjectsPage";
import LandingPanel from "./pages/LandingPanel";
import Connect from "./pages/Connect";

function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [blogsArray, setBlogsArray] = useState([]);

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPanel />} />
        <Route path="/aboutPage" element={<AboutPage isLightMode={isLightMode} setIsLightMode={setIsLightMode} />} />
        <Route path="/blogs" element={<BlogsPage blogsArray={blogsArray} isLightMode={isLightMode} setIsLightMode={setIsLightMode} />} />
        <Route path="/projects" element={<ProjectsPage isLightMode={isLightMode} setIsLightMode={setIsLightMode} />} />
        <Route path="/connect" element={<Connect />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
