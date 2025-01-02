import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import MainPage from "./pages/MainPage";
import './App.css';
import BlogsPage from "./pages/BlogsPage";
import ProjectsPage from "./pages/ProjectsPage";
import LandingPanel from "./pages/LandingPanel";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
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
        <Route path="/" element={<MainPage isLightMode={isLightMode} setIsLightMode={setIsLightMode} />} />
        <Route path="/blogs" element={<BlogsPage blogsArray={blogsArray} />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/panel" element={<LandingPanel />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
