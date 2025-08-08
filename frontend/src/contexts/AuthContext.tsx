import { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { AuthUser } from '../types/auth.types';

interface AuthContextType {
  user: AuthUser | null;
  login: (user: AuthUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  // On mount, restore user from localStorage if not expired
  useEffect(() => {
    const data = localStorage.getItem('authUser');
    if (data) {
      try {
        const parsed = JSON.parse(data);
        let u = parsed.user;
        // Support nested user.user (from backend/session)
        if (u && u.user) u = u.user;
        if (u && parsed.expiry && Date.now() < parsed.expiry) {
          setUser(u);
        } else {
          localStorage.removeItem('authUser');
        }
      } catch {
        localStorage.removeItem('authUser');
      }
    }
  }, []);

  const login = (user: any) => {
    // Support backend returning {token, user: {...}} or just user
    let u = user;
    if (u && u.user) u = u.user;
    setUser(u);
    localStorage.setItem('authUser', JSON.stringify({ user: u, expiry: Date.now() + 24 * 60 * 60 * 1000 }));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuthContext must be used within AuthProvider');
  return context;
};
