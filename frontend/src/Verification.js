// HeaderComponent.jsx

import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function HeaderComponent() {
    return (
        <div className="bg-white text-gray-700">
            < Navbar />
            <main className="flex flex-col items-center justify-center py-20">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff7675"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-24 w-24 text-[#ea4c89]"
                >
                    <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    <path d="m16 19 2 2 4-4"></path>
                </svg>
                <h1 className="text-3xl font-bold my-6">Please verify your email...</h1>
                <p className="mb-4">Please verify your email address. We've sent a confirmation email to:</p>
                <p className="mb-4 font-semibold">account@refero.design</p>
                <p className="mb-4">
                    Click the confirmation link in that email to begin using Dribbble.
                </p>
                <p class="mt-2 text-sm text-gray-600">
                    Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't
                    see it, you can{" "}
                    <a class="text-red-600 hover:underline" href="#">
                        resend the confirmation email
                    </a>
                    .
                </p>
                <p class="mt-4">Wrong email address?
                    <a class="text-sm text-blue-600 hover:underline" href="#">
                        Change it.
                    </a>
                </p>
            </main >
        < Footer />
        </div >
    );
}
