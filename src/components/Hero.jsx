const Hero = () => {
    return (
        <>
            <section id="hero" className="grid-container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <div className="hero-focul">
                            <h1 className="h1-dark">Andrew Sia</h1>
                            <h3 className="h3-dark">Web Developer</h3>
                            <p className="text-lg-dark">A creative and innovative web developer who turns ideas into reality, spanning from design to development.</p>
                        </div>
                        <a href="#work" className="button-1">See Work</a>
                        <a href="#footer" className="button-1">Contact Me!</a>
                    </div>
                </div>
                <div className="blob"></div>
            </section>
        </>
    )
}

export default Hero;