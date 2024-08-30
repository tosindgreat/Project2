import React from 'react';

const SignUpForm = () => {
    return (
        <form>
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignUpForm;
