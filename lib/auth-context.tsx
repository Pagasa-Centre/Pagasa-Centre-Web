'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserDetails } from '@/types/user';
import { isAuthenticated, getUser, clearAuthData } from '@/lib/auth';

export type AuthContextType = {
    user: UserDetails | null;
    login: (token: string, user: UserDetails) => void;
    register: (token: string, user: UserDetails) => void;
    logout: () => void;
    setUser: (user: UserDetails | null) => void; // ✅ new
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserDetails | null>(null);

    useEffect(() => {
        if (isAuthenticated()) {
            setUser(getUser());
        }
    }, []);

    const login = (token: string, user: UserDetails) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
    };

    const register = (token: string, user: UserDetails) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
    };

    const logout = () => {
        clearAuthData();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login,register, logout, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}