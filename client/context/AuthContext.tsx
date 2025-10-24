import { createContext, useContext, useState } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdActivities?: number;
  joinedActivities?: number;
  peopleMet?: number;
}

interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      setUser({
        id: "user-1",
        name: "Jean Dupont",
        email,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
        createdActivities: 3,
        joinedActivities: 8,
        peopleMet: 12,
      });
    } catch (err) {
      setError("Erreur de connexion");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextValue = {
    user,
    login,
    logout,
    isLoading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
