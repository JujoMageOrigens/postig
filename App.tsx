import type React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { username, password });
  };

  return (
    <div className="app">
      <main className="main-container">
        <div className="content-wrapper">
          {/* Left Column - Phone Mockup */}
          <div className="phone-mockup">
            <img
              src=""
              alt="
              className="phone-frame"
            />
            <div className="phone-screenshots">
              <img
                src=""
                alt=""
                className="instagram-screenshot"
              />
            </div>
          </div>

          {/* Right Column - Login Form */}
          <div className="login-section">
            {/* Login Form Container */}
            <div className="login-form-container">
              <div className="instagram-logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
                  alt="Instagram"
                  width="175"
                  height="51"
                />
              </div>

              <form onSubmit={handleSubmit} className="login-form">
                <input
                  type="text"
                  placeholder="Phone number, username, or email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
                <button
                  type="submit"
                  className="btn-primary login-btn"
                  disabled={!username || !password}
                >
                  Log in
                </button>
              </form>

              <div className="divider">
                <span>OR</span>
              </div>

              <button type="button" className="forgot-password">
                Forgot password?
              </button>
            </div>

            {/* Sign Up Container */}
            <div className="signup-container">
              <p>
                Don't have an account? <button type="button" className="signup-link">Sign up</button>
              </p>
            </div>

            {/* App Download */}
            <div className="app-download">
              <p>Get the app.</p>
              <div className="download-buttons">
                <button type="button" className="download-btn">
                  <img
                    src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                    alt="Download on the App Store"
                    width="136"
                    height="40"
                  />
                </button>
                <button type="button" className="download-btn">
                  <img
                    src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                    alt="Get it on Google Play"
                    width="136"
                    height="40"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <button type="button">Meta</button>
            <button type="button">About</button>
            <button type="button">Blog</button>
            <button type="button">Jobs</button>
            <button type="button">Help</button>
            <button type="button">API</button>
            <button type="button">Privacy</button>
            <button type="button">Terms</button>
            <button type="button">Locations</button>
            <button type="button">Instagram Lite</button>
            <button type="button">Threads</button>
            <button type="button">Contact Uploading & Non-Users</button>
            <button type="button">Meta Verified</button>
          </div>
          <div className="footer-bottom">
            <div className="language-selector">
              <select>
                <option>English</option>
              </select>
            </div>
            <p>© 2025 Instagram from Meta</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
