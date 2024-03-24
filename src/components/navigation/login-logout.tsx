"use client"
import { useState } from 'react';
import LinkButton from '../ui/buttons/link-button';
import NakidLinkButton from '../ui/buttons/link-button-nakid';
import LogoutButton from '../ui/buttons/logout-button';

export default function LoginLogout({ className }: { className?: string }) {
 
  // Assume isLoggedIn is a state variable that tracks the user's authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic (e.g., clear session, redirect, etc.)
    setIsLoggedIn(false);
  };

  return (
    <div className={`${className}`}>
      <div className="flex flex-row items-center justify-between">
        {!isLoggedIn ? (
          <>
            <NakidLinkButton href="/login" className="mr-3">
              {' '}
              Login{' '}
            </NakidLinkButton>
            <LinkButton href="/signup" className="mr-6">
              Sign Up
            </LinkButton>
          </>
        ) : (
          <LogoutButton className="mr-6 h-9 border px-2" />
        )}
      </div>
    </div>
  );
}
