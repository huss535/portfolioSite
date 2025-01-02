const LandingPanel = () => {
    return (
        <div className="page" id="landing-panel">
            <section className="hero">
                <h1>Elhussin Farah</h1>
            </section>

            {/*   <img src="src/assets/logo.svg" /> */}

            <section className="table-of-contents">
                <h1>Table of Content</h1>
                <nav id="table-content-grid">
                    <div className="table-of-contents-grid">
                        <a href="#about-me">#1 About Me</a>
                        <img src="src/assets/logo.svg" />
                    </div>

                    <div className="table-of-contents-grid">
                        <a href="#projects">#2 Projects</a>
                        <img src="src/assets/projects.svg" />

                    </div>
                    <div className="table-of-contents-grid">
                        <a href="#blog">#3 Blog</a>
                        <img src="src/assets/blogs.svg" />
                    </div>
                    <div className="table-of-contents-grid">
                        <a href="#connect">#4 Connect</a>
                        <img src="src/assets/socials.svg" />

                    </div>




                </nav>
            </section>
        </div>
    );
};

export default LandingPanel;
