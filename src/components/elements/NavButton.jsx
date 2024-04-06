import React from 'react';

export default function NavButton({ isOpen, setIsOpen }) {
    const toggleNavIcon = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="nav-icon" className={isOpen ? 'open' : ''} onClick={toggleNavIcon}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}