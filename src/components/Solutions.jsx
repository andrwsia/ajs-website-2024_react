import { frontendWebDevelopmentSolution, backendWebDevelopmentSolution } from '../lib/data';

const Solutions = () => {
    return (
        <>
            <section id="solutions" className="grid-container">
                <div className="solutions-grid">
                    <div className="solutions-title">
                        <h2 className="h2-dark">Solutions</h2>
                    </div>
                    <div className="solutions-content">
                        <div className="solution">
                            <h3 className="h3-dark">{frontendWebDevelopmentSolution.solution}</h3>
                            <p className="text-md-dark">{frontendWebDevelopmentSolution.description}</p>
                            <div className="solution-list">
                                {Object.values(frontendWebDevelopmentSolution.solutionTypes).map((solutionType, index) => (
                                    <p className="text-lg-dark" key={index}>{solutionType}</p>
                                ))}
                            </div>
                            <div className="solution-techstack">
                                <ul>
                                    {Object.values(frontendWebDevelopmentSolution.solutionTechstack).map((tech, index) => (
                                        <li key={index}>
                                            <img src={tech.icon} alt={tech.name}></img>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="solution">
                            <h3 className="h3-dark">{backendWebDevelopmentSolution.solution}</h3>
                            <p className="text-md-dark">{backendWebDevelopmentSolution.description}</p>
                            <div className="solution-list">
                                {Object.values(backendWebDevelopmentSolution.solutionTypes).map((solutionType, index) => (
                                    <p className="text-lg-dark" key={index}>{solutionType}</p>
                                ))}
                            </div>
                            <div className="solution-techstack">
                                <ul>
                                    {Object.values(backendWebDevelopmentSolution.solutionTechstack).map((tech, index) => (
                                        <li key={index}>
                                            <img src={tech.icon} alt={tech.name}></img>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Solutions;
