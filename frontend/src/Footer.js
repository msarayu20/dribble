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
                        <div className='new' >dribbble</div>
                        <p class="text-sm my-4">
                            Dribbble is the world's leading community for creatives to share, grow, and get hired.
                        </p>
                        <div class="flex space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-gray-800">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-gray-600">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-gray-600">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                            <svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16 12v-.001c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4c1.104 0 2.104-.448 2.828-1.171.723-.701 1.172-1.682 1.172-2.768 0-.021 0-.042-.001-.063v.003zm2.16 0c-.012 3.379-2.754 6.114-6.135 6.114-3.388 0-6.135-2.747-6.135-6.135s2.747-6.135 6.135-6.135c1.694 0 3.228.687 4.338 1.797 1.109 1.08 1.798 2.587 1.798 4.256 0 .036 0 .073-.001.109v-.005zm1.687-6.406v.002c0 .795-.645 1.44-1.44 1.44s-1.44-.645-1.44-1.44.645-1.44 1.44-1.44c.398 0 .758.161 1.018.422.256.251.415.601.415.988v.029-.001zm-7.84-3.44-1.195-.008q-1.086-.008-1.649 0t-1.508.047c-.585.02-1.14.078-1.683.17l.073-.01c-.425.07-.802.17-1.163.303l.043-.014c-1.044.425-1.857 1.237-2.272 2.254l-.01.027c-.119.318-.219.695-.284 1.083l-.005.037c-.082.469-.14 1.024-.159 1.589l-.001.021q-.039.946-.047 1.508t0 1.649.008 1.195-.008 1.195 0 1.649.047 1.508c.02.585.078 1.14.17 1.683l-.01-.073c.07.425.17.802.303 1.163l-.014-.043c.425 1.044 1.237 1.857 2.254 2.272l.027.01c.318.119.695.219 1.083.284l.037.005c.469.082 1.024.14 1.588.159l.021.001q.946.039 1.508.047t1.649 0l1.188-.024 1.195.008q1.086.008 1.649 0t1.508-.047c.585-.02 1.14-.078 1.683-.17l-.073.01c.425-.07.802-.17 1.163-.303l-.043.014c1.044-.425 1.857-1.237 2.272-2.254l.01-.027c.119-.318.219-.695.284-1.083l.005-.037c.082-.469.14-1.024.159-1.588l.001-.021q.039-.946.047-1.508t0-1.649-.008-1.195.008-1.195 0-1.649-.047-1.508c-.02-.585-.078-1.14-.17-1.683l.01.073c-.07-.425-.17-.802-.303-1.163l.014.043c-.425-1.044-1.237-1.857-2.254-2.272l-.027-.01c-.318-.119-.695-.219-1.083-.284l-.037-.005c-.469-.082-1.024-.14-1.588-.159l-.021-.001q-.946-.039-1.508-.047t-1.649 0zm11.993 9.846q0 3.578-.08 4.953c.005.101.009.219.009.337 0 3.667-2.973 6.64-6.64 6.64-.119 0-.237-.003-.354-.009l.016.001q-1.375.08-4.953.08t-4.953-.08c-.101.005-.219.009-.337.009-3.667 0-6.64-2.973-6.64-6.64 0-.119.003-.237.009-.354l-.001.016q-.08-1.375-.08-4.953t.08-4.953c-.005-.101-.009-.219-.009-.337 0-3.667 2.973-6.64 6.64-6.64.119 0 .237.003.354.009l-.016-.001q1.375-.08 4.953-.08t4.953.08c.101-.005.219-.009.337-.009 3.667 0 6.64 2.973 6.64 6.64 0 .119-.003.237-.009.354l.001-.016q.08 1.374.08 4.953z" /></svg>
                            <svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C6.46585 15 5.48059 14.7907 4.58427 14.4121L6.49504 10.0447C6.97541 10.6368 7.70586 11 8.5 11C10.433 11 12 9.433 12 7.5V7C12 4.79086 10.2091 3 8 3H7C4.79086 3 3 4.79086 3 7V7.5C3 8.39609 3.33741 9.21457 3.89133 9.83346L4.63646 9.16654C4.2403 8.72391 4 8.14062 4 7.5V7C4 5.34315 5.34315 4 7 4H8C9.65685 4 11 5.34315 11 7V7.5C11 8.88071 9.88071 10 8.5 10C7.81943 10 7.21522 9.56451 7 8.91886L6.99463 8.90274L7.95815 6.70041L7.04199 6.29959L3.68991 13.9615C1.48133 12.6564 0 10.2512 0 7.5Z" fill="#000000" />
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
