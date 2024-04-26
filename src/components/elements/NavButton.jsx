import React, { useState } from 'react';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

export default function NavButton({ toggleNavIcon, isOpen }) {
    // const [isHovered, setIsHovered] = useState(false);


    return (
        <div className={`header-mobile-btn ${isOpen ? 'open' : ''}`} onClick={toggleNavIcon}>
            <div id="nav-icon" className={`${isOpen ? 'open' : ''}`} onClick={toggleNavIcon}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}