import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Main from "./Components/Main";
import initializeFirebaseApp from './helpers/firebase';
import ProtectedRoute from './helpers/protectedRoutes';

const app = initializeFirebaseApp()

export default () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" exact element={<ProtectedRoute><Main /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};
