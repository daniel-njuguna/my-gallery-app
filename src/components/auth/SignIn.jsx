import React, { useState } from 'react';

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Clear previous error message
    setErrorMessage('');

    // Implement your authentication logic here (e.g., using Firebase, Auth0, etc.)
    // Replace the following with your authentication logic
    if (email === 'user@example.com' && password === '1Password') {
      onSignIn(); // Call the onSignIn function to update the isAuthenticated state
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="sign-in-container">
      <form id="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div id="error-message" style={{ color: 'red' }}>
          {errorMessage}
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SignIn;
