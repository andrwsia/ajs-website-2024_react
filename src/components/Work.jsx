import React from "react";
import { audiophileProject } from "../lib/data";
import ProjectPlaceholder from "./elements/ProjectPlaceholder";

const Work = () => {
    return (
        <>
            <section id="work" className="grid-container">
                <div className="work-grid grid-container_grid-area">
                    <div className="work-title">
                        <h2 className="h2-dark">Work</h2>
                    </div>
                    <div className="work-content">
                        <div className="project">
                            <div className="project-preview">
                                <img src={audiophileProject.src} alt={audiophileProject.name} />
                                <div className="project-more">
                                    <a href={audiophileProject.website} target="_blank" className="button-2">Website</a>
                                    <a href={audiophileProject.github} target="_blank" className="button-2">Github</a>
                                </div>
                            </div>
                            <div className="project-details">
                                <p className="text-lg-dark">{audiophileProject.name}</p>
                                <p className="text-md-dark">{audiophileProject.type}</p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-preview"><ProjectPlaceholder /></div>
                            <div className="project-details">
                                <p className="text-lg-dark">In Development</p>
                                <p className="text-md-dark">Wordpress Theme</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Work;