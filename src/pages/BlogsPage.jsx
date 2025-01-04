import { useNavigate } from "react-router-dom";
import moonIcon from '../assets/dark.svg';
import sunIcon from '../assets/light.svg';

/* eslint-disable react/prop-types */
function BlogsPage({ blogsArray, isLightMode, setIsLightMode }) {
    const navigate = useNavigate();


    const handleNavigation = (route) => {
        navigate(route);
    }

    const blogs = [
        {
            image_url: "https://img.freepik.com/free-photo/multi-colored-creativity-close-up-human-eye-generated-by-ai_188544-15574.jpg",
            title: "The Power of Positive Thinking",
            description: "Learn how to reframe your thoughts and cultivate a more optimistic outlook on life.",
            categories: ["Self-Improvement", "Psychology", "Raker"]
        },
        {
            image_url: "https://th.bing.com/th/id/OIG2._JJ7jEND0UMuzHjwBeTh",
            title: "5 Easy Steps to a Sustainable Kitchen",
            description: "Reduce your environmental impact and save money with these simple eco-friendly practices.",
            categories: ["Green Living", "Cooking", "Spice", "Love"]
        },
        {
            image_url: "https://pixlr.com/images/generator/photo-generator.webp",
            title: "Must-Have Travel Apps for Your Next Adventure",
            description: "Discover the best apps to help you plan, navigate, and document your dream vacation.",
            categories: ["Travel", "Technology", "RawDogger"]
        }
    ];

    return (
        <div id="blogs-page">

            <nav className='nav'>
                <h1>
                    Blog
                </h1>
                <div className="table-of-contents-grid">
                    <a
                        onClick={() => handleNavigation("/")}
                    >Home</a>


                </div>
                {/* <div className="table-of-contents-grid">
                            <a href="#connect">Home</a>


                        </div> */}

                <div className="table-of-contents-grid" onClick={() => { setIsLightMode((prev) => { return !prev; }) }} >

                    <img
                        src={!isLightMode ? moonIcon : sunIcon}
                        alt={!isLightMode ? 'Dark Mode' : 'Light Mode'}
                        className={`theme-icon ${!isLightMode ? 'rotate-icon' : ''}`}
                    />


                </div>



                <div className="table-of-contents-grid">
                    <a

                        onClick={() => handleNavigation("/connect")}
                    > Connect</a>


                </div>
            </nav>
            {blogs.map((blog, index) => (
                <div key={index} className="blog-container">
                    <div className="blog-container-content">

                        <h1>{blog.title}</h1>
                        <div className="categories">
                            {blog.categories.map((category, catIndex) => (
                                <span key={catIndex} className="category-area">
                                    {category}
                                </span>
                            ))}
                            {/* </div> */}


                            {/* <div className="custom-shadow-button" >
                                <button onClick={() => window.open(blog.link)}>
                                    <span>Read</span>
                                </button>
                            </div> */}


                        </div>
                        <p style={{ marginBottom: '5%' }}>{blog.description}</p>
                        {/*    <div className="blog-container-body"> */}
                        <div className="table-of-contents-grid">
                            <a
                                href="#projects"
                                onClick={() => window.open(blog.link)}
                            > Read More</a>


                        </div>

                        <br />
                        <br />


                    </div>
                    <img src={blog.image_url} alt={blog.title} />
                </div>
            ))}
        </div>
    );
}

export default BlogsPage;
