import React, { useState } from 'react';

function ChevronLeftIcon(props) {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g data-name="Layer 2"><g data-name="chevron-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />
        <path d="M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z" />
      </g>
      </g>
    </svg>
  );
}

export default function Component() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="custom-container">
      <div className="custom-content">
        <header className="custom-header">
          <h1 className="custom-title">dribbble</h1>
          <div className="custom-icon-holder">
            <ChevronLeftIcon className="custom-icon" />
          </div>
        </header>
        <main>
          <h2 className="custom-subtitle">What brings you to Dribbble?</h2>
          <p className="custom-text">
            Select the options that best describe you. Don't worry, you can explore other options later.
          </p>
          <div className="custom-grid">
            <div className="custom-card">
              <label>
                <img
                  alt="Designer illustration"
                  className="custom-image"
                  height="128"
                  src="/property1.png"
                  width="128"
                />
                <p className="custom-description">I’m a designer looking to share my work</p>
                <input
                  type="radio"
                  name="option"
                  value="designer"
                  checked={selectedOption === 'designer'}
                  onChange={() => handleOptionChange('designer')}
                />
              </label>
            </div>
            <div className="custom-card">
              <label>
                <img
                  alt="Hiring illustration"
                  className="custom-image"
                  height="128"
                  src="/property2.png"
                  width="128"
                />
                <p className="custom-description">I’m looking to hire a designer</p>
                <input
                  type="radio"
                  name="option"
                  value="hiring"
                  checked={selectedOption === 'hiring'}
                  onChange={() => handleOptionChange('hiring')}
                />
              </label>
            </div>
            <div className="custom-card">
              <label>
                <img
                  alt="Inspiration illustration"
                  className="custom-image"
                  height="128"
                  src="/property3.png"
                  width="128"
                />
                <p className="custom-description">I’m looking for design inspiration</p>
                <input
                  type="radio"
                  name="option"
                  value="inspiration"
                  checked={selectedOption === 'inspiration'}
                  onChange={() => handleOptionChange('inspiration')}
                />
              </label>
            </div>
          </div>
          <div className="custom-button">
            <button className="custom-button-style">Finish</button>
          </div>
        </main>
      </div>
    </div>
  );
}