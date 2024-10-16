// NavBar.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl">Expenses Tracker</h1>
      <div>
        {isAuthenticated && user ? (
          <>
            <span className="mr-4">
            Welcome, {user.nickname || user.name || user.email}!
            </span>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Log Out
            </button>
          </>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
