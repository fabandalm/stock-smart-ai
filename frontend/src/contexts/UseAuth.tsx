import { createContext, useContext, useEffect, useState } from "react";
import { UserProfile } from "../helpers/declarations";
import { useNavigate } from "react-router";
import { Login, Register } from "../services/AuthService";
import { showErrorModal, showSuccessModal } from "../helpers/handlers";
import React from "react";
import axios from "axios";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  RegisterUser: (
    email: string,
    userName: string,
    password: string,
    role: string
  ) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const AuthContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    if (savedToken) {
      setToken(savedToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch {
          setUser({ userName: savedUser, email: "" });
        }
      }
    }
    setIsReady(true);
  }, []);

  const RegisterUser = async (
    email: string,
    userName: string,
    password: string,
    role: string
  ) => {
    await Register(email, userName, password, role).then(
      (response) => {
        const userObj: UserProfile = { userName, email };
        localStorage.setItem("token", response.accessToken);
        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(response.accessToken);
        setUser(userObj);
        showSuccessModal();
        navigate("/stock");
      },
      (error) => {
        showErrorModal();
      }
    );
  };

  const login = async (userName: string, password: string) => {
    await Login(userName, password).then(
      (response) => {
        const userObj: UserProfile = { userName, email: "" };
        localStorage.setItem("token", response.accessToken);
        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(response.accessToken);
        setUser(userObj);
        showSuccessModal();
        navigate("/stock");
      },
      (error) => {
        showErrorModal();
      }
    );
  };

  const isLoggedIn = () => {
    return !!token;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, RegisterUser, login, logout, isLoggedIn }}
    >
      {isReady ? children : null}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

