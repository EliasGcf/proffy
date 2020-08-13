import React, { createContext, useState, useCallback, useContext } from 'react';

import api from '../services/api';

interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  email: string;
  whatsapp: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
  remember: boolean;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  // updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const isRememberMe = localStorage.getItem('@Proffy:remember');
    let storage: Storage = localStorage;

    if (isRememberMe) {
      const isRememberMeParsed = JSON.parse(isRememberMe);
      storage = isRememberMeParsed ? localStorage : sessionStorage;
    }

    const token = storage.getItem('@Proffy:token');
    const user = storage.getItem('@Proffy:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ email, password, remember }: SignInCredentials) => {
      const storage = remember ? localStorage : sessionStorage;
      const reseponse = await api.post('sessions', { email, password });

      const { token, user } = reseponse.data;

      storage.setItem('@Proffy:token', token);
      storage.setItem('@Proffy:user', JSON.stringify(user));

      localStorage.setItem('@Proffy:remember', JSON.stringify(remember));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });
    },
    [],
  );

  const signOut = useCallback(() => {
    const isRememberMe = localStorage.getItem('@Proffy:remember');
    let storage: Storage = localStorage;

    if (isRememberMe) {
      const isRememberMeParsed = JSON.parse(isRememberMe);
      storage = isRememberMeParsed ? localStorage : sessionStorage;
    }

    storage.removeItem('@Proffy:token');
    storage.removeItem('@Proffy:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
