// PrivateRoute.tsx
import React, { ReactNode } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

interface PrivateRouteProps {
    path: string;
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, path }) => {
    const isAuthenticated = AuthService.isAuthenticated();

    return (
        <Route
            path={path}
            element={isAuthenticated ? (
                <>{children}</>
            ) : (
                <Navigate
                    to="/login"
                    state={{ from: path }}
                />
            )}
        />
    );
};

export default PrivateRoute;
