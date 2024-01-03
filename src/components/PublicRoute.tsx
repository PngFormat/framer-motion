// PublicRoute.tsx
import React, { ReactNode } from 'react';
import {Navigate, Route, RouteProps} from 'react-router-dom';
import AuthService from '../services/AuthService';

interface PublicRouteProps {
    path: string;
    restricted?: boolean;
    children: ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children, restricted = false, path }) => {
    const isAuthenticated = AuthService.isAuthenticated();

    return (
        <Route
            path={path}
            element={isAuthenticated && restricted ? <Navigate to="/dashboard" /> : children}
        />
    );
};

export default PublicRoute;