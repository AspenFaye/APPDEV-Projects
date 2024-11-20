import React, { useState } from "react";
import Reviews from "./Reviews";

export default function Login() {
    const account = {
        username: "admin",
        password: "admin",
        role: "admin" // Added role for validation
    };

    // State variables for logging in
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState("");
    const [enterUsernames, setEnterUsernames] = useState("");
    const [enterPasswords, setEnterPasswords] = useState("");

    // Functional handlers for updating username and password states
    function getUsernames(event) {
        setEnterUsernames(event.target.value);
    }

    function getPasswords(event) {
        setEnterPasswords(event.target.value);
    }

    // Functional handler for handling the login process
    function handleLogin() {
        if (account.username === enterUsernames && account.password === enterPasswords) {
            setIsLoggedIn(true);
            setRole(account.role);
        } else {
            alert("Invalid username or password!");
        }
    }

    // Component to render the login form
    const renderLoginForm = () => {
        return (
            <div>
                <h1>Welcome to Wormmmy's Reviews!</h1>
                <h4>Login to Continue:</h4>
                Username:
                <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={getUsernames}
                />
                <br />
                <br />
                Password:
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={getPasswords}
                />
                <br />
                <br />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </div>
        );
    };

    // Component for rendering the admin panel
    const renderAdmin = () => {
        return (
            <Reviews isLoggedIn={isLoggedIn} accounts={[account]} />
        );
    };

    // Conditional rendering based on login state and role
    if (isLoggedIn === false) {
        return renderLoginForm();
    } else {
        return role === "admin" ? renderAdmin() : <h2>Access Denied</h2>;
    }
}
