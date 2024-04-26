import { biography } from "../lib/data";

const About = () => {
    return (
        <>
            <section id="about" className="grid-container">
                <div className="about-grid grid-container_grid-area">
                    <div className="about-title">
                        <h2 className="h2-light">About</h2>
                    </div>
                    <div className="about-content">
                        <p className="text-md-light">{biography.bio}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;