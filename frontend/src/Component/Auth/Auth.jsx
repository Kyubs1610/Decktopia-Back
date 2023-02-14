import React from "react"
import "./Auth.css"

export default function Auth() {

    return (
    <div> 
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">

                    <h3 className="Auth-form-title">Sign In</h3>

                    <div class="input-group">
                        <div id="username">
                            <input required="" type="text" name="text" autocomplete="off" class="input"/>
                            <label class="user-label">Username</label>
                        </div>

                        <div id="pass">
                            <input required="" type="password" name="text" autocomplete="off" class="input"/>
                            <label class="user-label">Password</label>
                        </div>
                    </div>

            
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>

                    <div id="password">
                        <a href="/auth/forgot">forgot password</a>
                        <p> - </p>
                        <a href="/auth/forgot">Reset</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
  }
