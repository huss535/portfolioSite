
import { motion } from "motion/react"
import MinButton from "../components/MinButton";
/* eslint-disable react/prop-types */
function BlogsPage({ blogsArray }) {
    /*  const [isActive, setIsActive] = useState(false);
 
     const handleTouchStart = () => {
         setIsActive(true);
     };
 
     const handleTouchEnd = () => {
         setIsActive(false);
     }; */


    /*   const blogs = [
          {
              image_url: "https://img.freepik.com/free-photo/multi-colored-creativity-close-up-human-eye-generated-by-ai_188544-15574.jpg",
              title: "The Power of Positive Thinking",
              description: "Learn how to reframe your thoughts and cultivate a more optimistic outlook on life.",
              categories: ["Self-Improvement", "Psychology", "Raker", "Self-Improvement", "Psychology", "Raker"]
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
          },
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
          },
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
   */
    return (


        <motion.div className='centered-page'
            initial={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
        >



            <div id="blogs-page" className="page-margins">
                {blogsArray.map((blog, index) => (
                    <div key={index} className="blog-container">


                        <h1 className={`${index % 2 !== 0 ? "container-shadow-right" : "container-shadow-left"}`}>{blog.title.toUpperCase()}</h1>
                        <div className={`blog-container-content ${index % 2 !== 0 ? "container-shadow-right" : "container-shadow-left"}`}
                        >

                            <div className="categories">
                                {blog.categories.map((category, catIndex) => (
                                    <span key={catIndex} className="category-area">
                                        {category}
                                    </span>
                                ))}



                            </div>
                            <p>{blog.description}</p>

                            {/*    <div className="blog-container-body"> */}
                            {/* 
                                <a


                                    href={blog.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`button-link button-link ${isActive ? "active" : ""}`}
                                    onTouchStart={handleTouchStart}
                                    onTouchEnd={handleTouchEnd}
                                >READ</a> */}

                            <MinButton text="READ" link={blog.link} isButton={false} />







                        </div>
                        {/*                         <img className={`${index % 2 !== 0 ? "container-shadow-right" : "container-shadow-left"}`} src={blog.image_url} alt={blog.title} />
 */}                    </div>
                ))}


            </div>

        </motion.div>


    );
}

export default BlogsPage;
