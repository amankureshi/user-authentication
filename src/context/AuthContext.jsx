import React, { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    consr [user,setUser]= useState(()=> {
  const stored = localStorage.getItem("user");
  return stored ? JSON.parse(stored) : null;
    });
    
    const login = (userData, token) => {
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", token)
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser(null)
    }

export default AuthContext;
