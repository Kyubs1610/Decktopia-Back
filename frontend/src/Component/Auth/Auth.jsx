import React from "react"
import "./Auth.css"

fetch('https://decktopia.netlify.app/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'decktopia',
    password: '1234'
  })
})
.then(response => {
  if (response.ok) {
    // Handle successful response
    console.log('Login successful!');
  } else {
    // Handle error response
    console.error('Login failed.');
  }
})
.catch(error => {
  // Handle network error
  console.error('Network error:', error);
});

export default function Auth() {

    return (
    <div> 
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">

                    <h3 className="Auth-form-title">Sign In</h3>

                    <div className="input-group">
                    <div id="username">
                      <input
                          required
                          type="text"
                          name="username"
                          autoComplete="off"
                          className="input"
                       />
                <label className="user-label">Username</label>
              </div>

                        <div id="pass">
                      <input
                          required
                          type="password"
                          name="password"
                          autoComplete="off"
                          className="input"
                        />
                            <label className="user-label">Password</label>
                        </div>
                    </div>

            
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>

                    <div id="password">
                        <a href="/register">Signup</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
  }
