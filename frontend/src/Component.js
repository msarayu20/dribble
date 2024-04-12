import React, { useState } from 'react';


export default function Component() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        setUsernameError(''); 
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleTermsChange = (e) => {
        setTermsChecked(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() === '') {
            setUsernameError('Username is required');
            return;
        }
        if (!termsChecked) {
            alert('Please agree to the terms');
            return;
        }
        console.log('Form submitted');
    };

    return (
        <div className="container">
            <div className="left-panel">
                <h1 className="title">dribbble</h1>
                <p className="subtitle">Discover the world’s top Designers & Creatives.</p>
                <img
                    className="image"
                    src="/IMG .png"
                />
                <p className="image-credit">Art by Peter Tarka</p>
            </div>
            <div className="right-panel">
                <div className="login">
                    <p className="text-sm">
                        Already a member? <a href="#" className="sign-in-link">Sign In</a>
                    </p>
                </div>
                <h2 className="sign-up-title">Sign up to Dribbble</h2>
                {usernameError && <p className="error-message">{usernameError}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group1">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" placeholder="John Valv" value={username} onChange={handleUsernameChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input id="name" placeholder="John" value={username} onChange={handleUsernameChange} />
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" placeholder="account@refero.design" type="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" placeholder="6+ characters" type="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className="form-group checkbox">
                        <input type="checkbox" id="terms" checked={termsChecked} onChange={handleTermsChange} />
                    </div>
                    <label htmlFor="terms">
                            Creating an account means you’re okay with our <a href="#" className="terms-link">Terms of Service</a>,{' '}
                            <a href="#" className="terms-link">Privacy Policy</a>, and our default{' '}
                            <a href="#" className="terms-link">Notification Settings</a>.
                        </label>
                        <div>
                    <button type="submit" className="create-account-btn">Create Account</button></div>
                </form>
                <p className="footer-text">
                    This site is protected by reCAPTCHA and the Google{' '}
                    <a href="#" className="terms-link">Privacy Policy</a> and{' '}
                    <a href="#" className="terms-link">Terms of Service</a> apply.
                </p>
            </div>
        </div>
    );
}
