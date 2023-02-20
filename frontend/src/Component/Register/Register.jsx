import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() 
    {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigateTo = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make the API call to register the user
    fetch('https://decktopia.netlify.app/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    })
    .then(response => {
      if (response.ok) {
        // Redirect the user to the profile page upon successful registration
        navigateTo.push('/profile');
      } else {
        // Handle error response
        setErrorMessage('Login failed.');
      }
    })
    .catch(error => {
      // Handle network error
      setErrorMessage('Network error: ' + error.message);
    });
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>

            <div className="input-group">
              <div id="username">
                <input
                  required
                  type="text"
                  name="username"
                  autoComplete="off"
                  className="input"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <label className="user-label">Username</label>
              </div>
              <br />

              <div id="email">
                <input
                  required
                  type="text"
                  name="email"
                  autoComplete="off"
                  className="input"
                  value={email}
                  onChange={handleEmailChange}
                />
                <label className="user-label">Email</label>
              </div>
              <br />

              <div id="pass">
                <input
                  required
                  type="password"
                  name="password"
                  autoComplete="off"
                  className="input"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <label className="user-label">Password</label>
              </div>
              <br />
              <div id="pass">
                <input
                  required
                  type="password"
                  name="confirmPassword"
                  autoComplete="off"
                  className="input"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <label className="user-label">Confirm Password</label>
              </div>
            </div>
            <br />

            {errorMessage && <div className="error-message">{errorMessage}</div>}

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Create Account
              </button>
            </div>

            <div id="password">
              <a href="/login">Already an account ?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
