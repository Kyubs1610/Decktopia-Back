import React from "react"
import "./Register.css"

export default function Auth() {

    return (
        <div>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">

                        <h3 className="Auth-form-title">Register</h3>

                        <div className="input-group">
                            <div id="username">
                                <input required="" type="text" name="text" autoComplete="off" className="input" />
                                <label className="user-label">Username</label>
                            </div>

                            <div id="email">
                                <input required="" type="text" name="text" autoComplete="off" className="input" />
                                <label className="user-label">Email</label>
                            </div>

                            <div id="pass">
                                <input required="" type="password" name="text" autoComplete="off" className="input" />
                                <label className="user-label">Password</label>
                            </div>
                        </div>


                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Create Account
                            </button>
                        </div>

                        <div id="password">
                            <a href="/auth/forgot">already an account ?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}