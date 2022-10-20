import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AdminDashboard } from "../components/dashboard/AdminDashboard";
import { Dashboard } from "../components/dashboard/Dashboard";
import { ForgotPassword } from "../components/login/ForgotPassword";
import Login from "../components/login/Login";
import ProtectedRoute from "./Protected";

export const Main=()=>{   
    return(
    <BrowserRouter>
    <Routes>
      <Route index element= {<Login />} />
      <Route path="/user"
       element={
        <ProtectedRoute>
         <Dashboard />
        </ProtectedRoute>
      } />
       <Route path="/admin"
       element={
        <ProtectedRoute>
         <AdminDashboard />
        </ProtectedRoute>
      } />
      <Route path="resetpassword" element={<ForgotPassword />}/>
    </Routes>
   </BrowserRouter>
    )
}