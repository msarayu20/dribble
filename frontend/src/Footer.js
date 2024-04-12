import React from "react";

export default function FooterComponent() {
    const footerStyle = {
        backgroundColor: "#f3f4f6",
        padding: "2rem",
    };

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
        // gap: "1rem",
    };

    const colStyle = {
        marginBottom: "1rem",
    };

    const linkStyle = {
        display: "block",
        marginBottom: "0.5rem",
        fontSize: "0.875rem",
        color: "#4b5563",
        textDecoration: "none",
    };

    return (
        <footer style={footerStyle}>
            <div style={gridStyle}>
            <div class="grid grid-cols-2 md:grid-cols-6 gap-4 p-8">
                <div class="col-span-2 md:col-span-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-gray-800">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                        <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
                    </svg>
                    <p class="text-sm my-4">
                        Dribbble is the world's leading community for creatives to share, grow, and get hired.
                    </p>
                    <div class="flex space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-gray-600">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-gray-600">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-gray-600">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </div>
                </div>
            </div>

            
                <div style={colStyle}>
                    <h6 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>For designers</h6>
                    <a style={linkStyle} href="#">
                        Go Pro!
                    </a>
                    <a style={linkStyle} href="#">
                        Explore design work
                    </a>
                    <a style={linkStyle} href="#">
                        Design blog
                    </a>
                    <a style={linkStyle} href="#">
                        Overtime podcast
                    </a>
                    <a style={linkStyle} href="#">
                        Playoffs
                    </a>
                    <a style={linkStyle} href="#">
                        Weekly Warm-Up
                    </a>
                    <a style={linkStyle} href="#">
                        Refer a Friend
                    </a>
                    <a style={linkStyle} href="#">
                        Code of conduct
                    </a>
                </div>
                <div style={colStyle}>
                    <h6 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>Hire designers</h6>
                    <a style={linkStyle} href="#">
                        Post a job opening
                    </a>
                    <a style={linkStyle} href="#">
                        Post a freelance project
                    </a>
                    <a style={linkStyle} href="#">
                        Search for designers
                    </a>
                    <a style={linkStyle} href="#">
                        Brands
                    </a>
                    <a style={linkStyle} href="#">
                        Advertise with us
                    </a>
                </div>
                <div style={colStyle}>
                    <h6 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>Company</h6>
                    <a style={linkStyle} href="#">
                        About
                    </a>
                    <a style={linkStyle} href="#">
                        Careers
                    </a>
                    <a style={linkStyle} href="#">
                        Support
                    </a>
                    <a style={linkStyle} href="#">
                        Media kit
                    </a>
                    <a style={linkStyle} href="#">
                        Testimonials
                    </a>
                    <a style={linkStyle} href="#">
                        API
                    </a>
                    <a style={linkStyle} href="#">
                        Terms of service
                    </a>
                    <a style={linkStyle} href="#">
                        Privacy policy
                    </a>
                    <a style={linkStyle} href="#">
                        Cookie policy
                    </a>
                </div>
                <div style={colStyle}>
                    <h6 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>Directories</h6>
                    <a style={linkStyle} href="#">
                        Design jobs
                    </a>
                    <a style={linkStyle} href="#">
                        Designers for hire
                    </a>
                    <a style={linkStyle} href="#">
                        Freelance designers for hire
                    </a>
                    <a style={linkStyle} href="#">
                        Tags
                    </a>
                    <a style={linkStyle} href="#">
                        Places
                    </a>
                    <a style={linkStyle} href="#">
                        Design assets
                    </a>
                    <a style={linkStyle} href="#">
                        Dribbble Marketplace
                    </a>
                    <a style={linkStyle} href="#">
                        Creative Market
                    </a>
                    <a style={linkStyle} href="#">
                        Fontspring
                    </a>
                    <a style={linkStyle} href="#">
                        Font Squirrel
                    </a>
                </div>
                <div style={colStyle}>
                    <h6 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>Design Resources</h6>
                    <a style={linkStyle} href="#">
                        Freelancing
                    </a>
                    <a style={linkStyle} href="#">
                        Design Hiring
                    </a>
                    <a style={linkStyle} href="#">
                        Design Portfolio
                    </a>
                    <a style={linkStyle} href="#">
                        Design Education
                    </a>
                    <a style={linkStyle} href="#">
                        Creative Process
                    </a>
                    <a style={linkStyle} href="#">
                        Design Industry Trends
                    </a>
                </div>
            </div>
            <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "1rem", textAlign: "center", fontSize: "0.875rem" }}>
                <span>© 2023 Dribbble. All rights reserved.</span>
                <span style={{ marginLeft: "1rem" }}>20,501,8503 shots dribbbled</span>
            </div>
        </footer>
    );
}
