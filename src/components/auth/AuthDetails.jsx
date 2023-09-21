import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthDatails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign out successful');
      })
      .catch(error => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed out</p>
      )}
    </div>
  );
}

export default AuthDatails;
