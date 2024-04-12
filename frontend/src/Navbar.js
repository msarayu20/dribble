import React from 'react';

function Header() {
    return (
        <header class="header">
            <div class="logo">
            <h1 className="new">dribbble</h1>
                <nav class="nav-links">
                    <a href="#">Inspiration</a>
                    <a href="#">Find Work</a>
                    <a href="#">Learn Design</a>
                    <a href="#">Go Pro</a>
                    <a href="#">Hire Designers</a>
                </nav>
            </div>
            <div class="search-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input class="search" type="search" placeholder="Search..." />
                <button class="upload-btn">Upload</button>
            </div>
        </header>
    );
}

export default Header;
