/* eslint-disable react/prop-types */
function BlogsPage({ blogsArray }) {
    console.dir(blogsArray);
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
        <div id="page">
            {blogs.map((blog, index) => (
                <div key={index} className="blog-container">
                    <div className="blog-container-content">

                        <h1>{blog.title}</h1>

                        <div className="blog-container-body">
                            <div className="categories">
                                {blog.categories.map((category, catIndex) => (
                                    <span key={catIndex} className="category-area">
                                        {category}
                                    </span>
                                ))}
                            </div>

                            <p style={{ marginBottom: '5%' }}>{blog.description}</p>
                            <div className="custom-shadow-button" >
                                <button onClick={() => window.open(blog.link)}>
                                    <span>Read</span>
                                </button>
                            </div>


                        </div>

                    </div>
                    <img src={blog.image_url} alt={blog.title} />
                </div>
            ))}
        </div>
    );
}

export default BlogsPage;
