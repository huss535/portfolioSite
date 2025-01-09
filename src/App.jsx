import { BrowserRouter } from "react-router-dom";
import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import TopNav from "./components/TopNav";

function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [blogsArray, setBlogsArray] = useState([]);
  useEffect(() => {
    const root = document.documentElement;
    if (isLightMode) {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [isLightMode]);

  /*   useEffect(() => {
      axios
        .get("https://n66mnx3j52.execute-api.us-east-1.amazonaws.com/getBlogs")
        .then((response) => {
          setBlogsArray(response.data || []);
  
        })
        .catch((error) => {
          console.error("Error fetching blogs:", error);
  
        });
    }, []); */
  return (
    <BrowserRouter>
      <TopNav isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
      {/*  <Routes>
     
        <Route path="/" element={<AboutPage isLightMode={isLightMode} setIsLightMode={setIsLightMode} />} />
        <Route path="/blogs" element={<BlogsPage blogsArray={blogsArray} isLightMode={isLightMode} setIsLightMode={setIsLightMode} />} />
        <Route path="/projects" element={<ProjectsPage isLightMode={isLightMode} setIsLightMode={setIsLightMode} />} />
        <Route path="/connect" element={<Connect isLightMode={isLightMode} setIsLightMode={setIsLightMode} />} />

      </Routes> */}
      <AnimatedRoutes blogsArray={blogsArray} isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
    </BrowserRouter>
  );
}

export default App;
