import ContactForm from "./ContactForm";

const Footer = () => {
    return (
        <>
            <footer id="footer" className="grid-container">
                <div className="footer-grid grid-container_grid-area">
                    <div className="footer-title">
                        <h2 className="h2-dark">Contact</h2>
                    </div>
                    <nav className="footer-nav">
                        <ContactForm />
                        <div className="socials">
                            <h3 className="h3-dark">Socials</h3>
                            <a className="text-xl-dark" target="_blank" href="mailto:andrewsia.dev@gmail.com">
                                Email
                                <svg width="40" height="40" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.94922 10.2192V4.44453H4.17451" stroke="currentColor" stroke-width="0.583333" stroke-miterlimit="10"></path><path d="M9.9481 4.44301L3.89062 10.5005" stroke="currentColor" stroke-width="0.583333" stroke-miterlimit="10"></path></svg>
                            </a>
                            <a className="text-xl-dark" target="_blank" href="https://linkedin.com/in/andrew-j-sia">
                                Linkedin
                                <svg width="40" height="40" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.94922 10.2192V4.44453H4.17451" stroke="currentColor" stroke-width="0.583333" stroke-miterlimit="10"></path><path d="M9.9481 4.44301L3.89062 10.5005" stroke="currentColor" stroke-width="0.583333" stroke-miterlimit="10"></path></svg>
                            </a>
                            <a className="text-xl-dark" target="_blank" href="https://github.com/andrwsia">
                                Github
                                <svg width="40" height="40" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.94922 10.2192V4.44453H4.17451" stroke="currentColor" stroke-width="0.583333" stroke-miterlimit="10"></path><path d="M9.9481 4.44301L3.89062 10.5005" stroke="currentColor" stroke-width="0.583333" stroke-miterlimit="10"></path></svg>
                            </a>
                        </div>
                    </nav>
                    <div className="copyright">
                        <p>© 2024 Andrew Sia</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;