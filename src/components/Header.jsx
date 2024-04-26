import React, { useState, useEffect } from "react";
import gsap from "gsap";
import NavButton from "./elements/NavButton";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Header = () => {
    const [isNavButtonOpen, setIsNavButtonOpen] = useState(false);
    const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

    const navLinks = [
        { title: "Solutions", href: "#solutions" },
        { title: "Work", href: "#work" },
        { title: "About", href: "#about" },
        { title: "Contact", href: "#contact" }
    ];

    useEffect(() => {
        // Animation for opening and closing the nav
        const tl = gsap.timeline({ paused: true });

        // Define animation steps
        tl.to(".header-mobile", { duration: 0.3, height: "auto", display: "block" })
            .from(".header-mobile ul li", { duration: 0.3, y: -20, opacity: 0, stagger: 0.1 })
            .reverse();

        // Play animation when isNavButtonOpen changes
        if (isNavButtonOpen) {
            tl.play();
        } else {
            tl.reverse();
        }
    }, [isNavButtonOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 250) { // Adjust this value to your desired scroll position
                setIsHeaderScrolled(true);
            } else {
                setIsHeaderScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <header id="header" className={isNavButtonOpen ? 'header-bg-dark' : ''}>

                {isHeaderScrolled ? (
                    '' // If header is scrolled, render nothing
                ) : (
                    <nav className={`header-default`}>
                        <div className={`header-logo ${isHeaderScrolled ? 'display-hide' : ''}`}>
                            <a className="text-md-dark" href="/">AJS</a>
                        </div>
                        <div className="header-menu">
                            <ul className="">
                                {navLinks.map((item, index) => (
                                    <li key={index}>
                                        <a className="text-md-dark" href={item.href}>
                                            <span>{item.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                )}

                {isNavButtonOpen && (
                    <nav className={`header-toggled`}>
                        <div className={`header-logo`}>
                            <a className="text-md-light" href="/">AJS</a>
                        </div>
                        <div className={`header-mobile`} style={{ height: 0, overflow: "hidden" }}>
                            <ul>
                                {navLinks.map((item, index) => (
                                    <li key={index}>
                                        <a className="text-header-mobile" href={item.href}>
                                            <span>{item.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                )}
                <div className={`header-mobile-btn ${isHeaderScrolled ? 'display-show' : ''} ${isNavButtonOpen  ? 'display-show' : ''}`}>
                    <NavButton isOpen={isNavButtonOpen} setIsOpen={setIsNavButtonOpen} />
                </div>
            </header>
        </>
    )
}



export default Header;
