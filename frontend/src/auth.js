import { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";

const stprage=localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(stprage);
  
  
  const login=(user)=>{
    setUser(user)
  }
  const logout=()=>{
    setUser(null)
  }
  return (
    <AuthContext.Provider value={{ user, login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
