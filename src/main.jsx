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
import DonorDashHome from './Pages/DashBoard/DonorDashBoard/DonorDashHome.jsx';
import MyDonationRequests from './Pages/DashBoard/DonorDashBoard/MyDonationRequests.jsx';
import PrivatePage from './Pages/PrivatePage.jsx';
import AllUsers from './Pages/DashBoard/AdminDashBoard/AllUsers.jsx';
import AllBloodDonationRequest from './Pages/DashBoard/AdminDashBoard/AllBloodDonationRequest.jsx';


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
    element: <PrivatePage><DashboardLayout></DashboardLayout></PrivatePage> ,
    children: [
      {index:true , Component: DashboardHome} ,
      {path:'profile' , Component: DashProfile} ,
      {path:'all-blood-donation-request' , Component: AllBloodDonationRequests} ,
      {path:'create-donation-request' , Component:CreateDonationRequest} ,
      {path:'my-donation-requests' , Component:MyDonationRequests} ,
      {path:'all-users' , Component:AllUsers} ,
      {path:'all-blood-donation-request' , Component:AllBloodDonationRequest} ,
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
