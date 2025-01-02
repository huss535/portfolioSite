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
                    <div className="table-of-contents-grid"> <a href="#about-me">#1 About Me</a></div>
                    <div className="table-of-contents-grid"><a href="#projects">#2 Projects</a></div>
                    <div className="table-of-contents-grid"><a href="#blog">#3 Blog</a></div>
                    <div className="table-of-contents-grid"><a href="#connect">#4 Connect</a></div>




                </nav>
            </section>
        </div>
    );
};

export default LandingPanel;
