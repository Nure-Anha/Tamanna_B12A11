import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layouts/Root.jsx';
import Home from './Pages/Home.jsx';
import AuthProvider from './Pages/Authentication/Auth/AuthProvider.jsx';
import Login from './Pages/Authentication/Login.jsx';
import Register from './Pages/Authentication/Register.jsx';
import DashboardLayout from './Layouts/DashboardLayout/DashboardLayout.jsx';
import DashboardHome from './Pages/DashBoard/DashboardHome.jsx';
import DashProfile from './Pages/DashBoard/DashProfile.jsx';
import AllBloodDonationRequests from './Pages/DashBoard/AllBloodDonationRequests.jsx';
import CreateDonationRequest from './Pages/DashBoard/DonorDashBoard/CreateDonationRequest.jsx';


const router = createBrowserRouter([
  {
    path: "/" ,
    Component: Root ,
    children: [
      {index:true , Component:Home} ,
      {path:'register' , Component:Register} ,
      {path:'login' , Component:Login} 
    ]
  },


  // Dashboard layout
  {
    path: '/dashboard' ,
    Component: DashboardLayout ,
    children: [
      {index:true , Component: DashboardHome} ,
      {path:'/dashboard/profile' , Component: DashProfile} ,
      {path:'/dashboard/all-blood-donation-request' , Component: AllBloodDonationRequests} ,
      {path:'/dashboard/create-donation-request' , Component:CreateDonationRequest} ,
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
