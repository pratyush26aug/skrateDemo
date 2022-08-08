import { isUserAuth } from "./auth";
import { useEffect } from 'react';
import {
  useNavigate,
} from "react-router-dom";

const  ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  useEffect(()=>{
    const user  = isUserAuth();
    if (!user) {
      navigate('/')
    }
  })
  return children;
};

export default ProtectedRoute