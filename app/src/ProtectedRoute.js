// ProtectedRoute.js
import React from 'react';
import { Route, Outlet, Navigate} from 'react-router-dom';

const ProtectedRoute = () =>{
  const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;