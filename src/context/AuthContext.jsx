import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Restore user from localStorage on page refresh
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
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
  };

  const login = (credentials) => {
    const storedAccount = JSON.parse(localStorage.getItem("user"));
    if (!storedAccount) {
      return { success: false, reason: "no-account" };
    }

    if (
      storedAccount.email === credentials.email &&
      storedAccount.password === credentials.password
    ) {
      setUser(storedAccount);
      return { success: true };
    }

    return { success: false, reason: "invalid-credentials" };
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
