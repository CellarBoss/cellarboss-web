'use client';
import { useState, useEffect } from 'react';
import { getToken, logout } from '@/lib/auth';

export function useAuth() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(getToken());
  }, []);

  const handleLogout = () => {
    logout();
    setToken(null);
    window.location.href = '/login';
  };

  return { token, isAuthenticated: !!token, handleLogout };
}