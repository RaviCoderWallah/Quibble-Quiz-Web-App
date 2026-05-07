import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(true);
  const [isAuthLoaded, setIsAuthLoaded] = useState(false);

  // Restore user from localStorage on page refresh
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setIsAuthLoaded(true);
  }, []);

  const signup = (data) => {
    const newUser = {
      id: Date.now(),
      name: data.username,
      email: data.email,
      password: data.password,
      avatar: null,
      theme: "dark",
      language: "en",
      createdAt: Date.now(),
    };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    setIsLogged(true);
  };

  const login = (credentials) => {
    const storedAccount = JSON.parse(localStorage.getItem("user"));
    if (!storedAccount) {
      setIsLogged(false);
      return { success: false, reason: "no-account" };
    }

    if (
      storedAccount.email === credentials.email &&
      storedAccount.password === credentials.password
    ) {
      setUser(storedAccount);
      setIsLogged(true);
      return { success: true };
    }

    return { success: false, reason: "invalid-credentials" };
  };

  const logout = () => {
    setIsLogged(false);
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        signup,
        login,
        logout,
        signout,
        isAuthLoaded,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
