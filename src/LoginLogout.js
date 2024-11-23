import React, { useState } from 'react';

const LoginLogout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginLogout = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={handleLoginLogout}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default LoginLogout;
