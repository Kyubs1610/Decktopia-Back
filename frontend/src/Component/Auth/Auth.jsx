import React from "react";
import "./Auth.css";

export default function Auth() {
  function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission behavior
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "decktopia@example.com",
        password: "1234",
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful response
          console.log("Login successful!");
          window.location.href = "/profile";
        } else {
          // Handle error response
          console.error("Login failed.");
        }
      })
      .catch((error) => {
        // Handle network error
        console.error("Network error:", error);
      });
  }

  return (
    <div>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleLogin}>
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
              <a href="/profile"> <button type="submit" className="btn btn-primary">
                Submit
              </button></a>
            </div>
            <div id="password">
              <a href="/register">Signup</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
