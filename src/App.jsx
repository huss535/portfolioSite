import { HashRouter as Router } from "react-router-dom";
import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import TopNav from "./components/TopNav";

function App() {
  const [isLightMode, setIsLightMode] = useState(false); // dark mode / light mode switch
  const [blogsArray, setBlogsArray] = useState([]); // medium articles array


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


      <AnimatedRoutes blogsArray={blogsArray} />
      <TopNav isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
    </Router>
  );
}

export default App;
