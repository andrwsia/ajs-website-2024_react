import React, { useState, useEffect } from "react";
import gsap from "gsap";
import NavButton from "./elements/NavButton";

const Header = () => {
    const [isNavButtonOpen, setIsNavButtonOpen] = useState(false);

    const navLinks = [
        { title: "Solutions", href: "#" },
        { title: "Work", href: "#" },
        { title: "About", href: "#" },
        { title: "Contact", href: "#" }
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
    

    return (
        <>
            <header id="header">
                <nav className="header-desktop">
                    <div className="header-content">
                        <div className="header-logo">
                            <a className="text-md-light" href="/">AJS</a>
                        </div>
                        <div className="header-menu">
                            <ul className="">
                                {navLinks.map((item, index) => (
                                    <li key={index}>
                                        <a className="text-md-light" href={item.href}>
                                            <span>{item.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="header-mobile-btn">
                            <NavButton isOpen={isNavButtonOpen} setIsOpen={setIsNavButtonOpen} />
                        </div>
                    </div>
                </nav>

                {isNavButtonOpen && (
                    <nav className={`header-mobile`} style={{ height: 0, overflow: "hidden" }}>
                        <ul>
                            {navLinks.map((item, index) => (
                                <li key={index}>
                                    <a className="text-header-mobile" href={item.href}>
                                        <span>{item.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </header>
        </>
    )
}

export default Header;
