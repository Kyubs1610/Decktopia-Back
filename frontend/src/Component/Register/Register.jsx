import React from "react"
import "./Register.css"

export default function Auth() {

    return (
        <div>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">

                        <h3 className="Auth-form-title">Register</h3>

                        <div class="input-group">
                            <div id="username">
                                <input required="" type="text" name="text" autocomplete="off" class="input" />
                                <label class="user-label">Username</label>
                            </div>

                            <div id="email">
                                <input required="" type="text" name="text" autocomplete="off" class="input" />
                                <label class="user-label">Email</label>
                            </div>

                            <div id="pass">
                                <input required="" type="password" name="text" autocomplete="off" class="input" />
                                <label class="user-label">Password</label>
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