import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import type { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: string[];
}


const getDashboardRoute = (role: string) => {
  if (role === 'admin') return '/admin/dashboard';
  if (role === 'merchant') return '/merchant/dashboard';
  return '/user/dashboard';
};

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect to their own dashboard
    return <Navigate to={getDashboardRoute(user.role)} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
