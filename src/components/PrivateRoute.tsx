
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import authService from '../services/AuthService';
import Login from './Login';

interface ProtectedRouteProps {
    path: string;
    element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, element }) => {
    return authService.isAuthenticated() ? (
        <Route path={path} element={element} />
    ) : (
        <Route path={path} element={<Navigate to="/login" />} />
    );
};

export default ProtectedRoute;
