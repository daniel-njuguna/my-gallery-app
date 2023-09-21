import React from 'react';
import { auth } from '../../firebase';


const SignOut = ({ onSignOut }) => {
  const handleSignOut = () => {
    // Implement your sign-out logic here (e.g., using Firebase, Auth0, etc.)
    // Call the onSignOut function to update the isAuthenticated state
    onSignOut();
  };

  return (
    <div className="sign-out-container">
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
