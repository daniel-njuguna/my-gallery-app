// App.js

import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import LoginForm from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import './App.css';

const images = [
  {
    url: '../pexels-julissa-helmuth-4962458.jpg',
    tags: ['Nature', 'Scenery'],
  },
  {
    url: '../pexels-yaroslav-shuraev-6283214.jpg',
    tags: ['Architecture'],
  },
  {
    url: '../Spring.jpg',
    tags: ['spring'],
  }, {
    url: '../pexels-w-o-l-f-λ-r-t-13027885.jpg',
    tags: ['grass'],
  }, {
    url: '../pexels-fabiotsu-1756325.jpg',
    tags: ['Summer'],
  }, {
    url: '../pexels-nripen-kumar-roy-725458.jpg',
    tags: ['Beauty'],
  }, {
    url: '../pexels-rdne-stock-project-4918787.jpg',
    tags: ['Love'],
  }, {
    url: '../pexels-avery-nielsenwebb-2406395.jpg',
    tags: ['river'],
  }, {
    url: '../pexels-lil-artsy-1624076.jpg',
    tags: ['Flower'],
  }, {
    url: '../pexels-niklas-jeromin-14760616.jpg',
    tags: ['Travel'],
  }, {
    url: '../Beauty.jpg',
    tags: ['Blur'],
  }, {
    url: '../pexels-gül-işık-2127667.jpg',
    tags: ['Ocean'],
  }, {
    url: '../pexels-marcelo-chagas-14934612.jpg',
    tags: ['Birds'],
  }, {
    url: '../pexels-龔-月強-3162755.jpg',
    tags: ['Monkey'],
  }, {
    url: '../pexels-vishva-patel-5306143.jpg',
    tags: ['The Big cat'],
  },
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <h1>Image Gallery App</h1>
      {isAuthenticated ? (
        <>
          <SignOut onSignOut={handleSignOut} />
          <ImageGallery images={images} isAuthenticated={isAuthenticated} />
        </>
      ) : (
        <>
          <LoginForm onSignIn={handleSignIn} />
          <ImageGallery images={images} isAuthenticated={isAuthenticated} />
        </>
      )}
    </div>
  );
}

export default App;
