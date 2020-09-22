import React from 'react';
import { Redirect } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const isLogin = true;

  return (
    <div>
      {isLogin ? (
        <React.Fragment>{children}</React.Fragment>
      ) : (
        <Redirect to={'/login'} />
      )}
    </div>
  );
};

export default ProtectedRoutes;
