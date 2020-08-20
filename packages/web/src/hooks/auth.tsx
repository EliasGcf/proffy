import React, { createContext, useState, useCallback, useContext } from 'react';

import api from '../services/api';

interface User {
  id: string;
  first_name: string;
  last_name: string;
  avatar?: string;
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
}
interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  setIsRememberMe(isRememberMe: boolean): void;
  getIsRememberMe(): boolean;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [storage, setStorage] = useState<Storage>(() => {
    const isRememberMe = localStorage.getItem('@Proffy:remember');

    if (isRememberMe) {
      const isRememberMeParsed = JSON.parse(isRememberMe);
      return isRememberMeParsed ? localStorage : sessionStorage;
    }

    return sessionStorage;
  });

  const [data, setData] = useState<AuthState>(() => {
    const token = storage.getItem('@Proffy:token');
    const user = storage.getItem('@Proffy:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      const reseponse = await api.post('sessions', { email, password });

      const { token, user } = reseponse.data;

      storage.setItem('@Proffy:token', token);
      storage.setItem('@Proffy:user', JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });
    },
    [storage],
  );

  const signOut = useCallback(() => {
    storage.removeItem('@Proffy:token');
    storage.removeItem('@Proffy:user');

    setData({} as AuthState);
  }, [storage]);

  const updateUser = useCallback(
    (user: User) => {
      storage.setItem('@Proffy:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [storage, data.token],
  );

  const setIsRememberMe = useCallback(isRememberMe => {
    if (!isRememberMe) {
      localStorage.setItem('@Proffy:remember', JSON.stringify(false));
      setStorage(sessionStorage);
      return;
    }

    localStorage.setItem('@Proffy:remember', JSON.stringify(true));
    setStorage(localStorage);
  }, []);

  const getIsRememberMe = useCallback(() => {
    const isRememberMe = localStorage.getItem('@Proffy:remember');

    if (!isRememberMe) return false;

    const isRememberMeParsed = JSON.parse(isRememberMe);
    return isRememberMeParsed;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        updateUser,
        setIsRememberMe,
        getIsRememberMe,
      }}
    >
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
