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
import CreateDonationRequest from './Pages/DashBoard/DonorDashBoard/CreateDonationRequest.jsx';
import MyDonationRequests from './Pages/DashBoard/DonorDashBoard/MyDonationRequests.jsx';
import PrivatePage from './Pages/PrivatePage.jsx';
import AllUsers from './Pages/DashBoard/AdminDashBoard/AllUsers.jsx';
import EditDonationReq from './Pages/DashBoard/DonorDashBoard/EditDonationReq.jsx';
import AllBloodDonationRequests from './Pages/DashBoard/AdminDashBoard/AllBloodDonationRequests.jsx';
import Fundings from './Pages/Fundings.jsx'
import PaymentSuccess from './Pages/PaymentSuccess.jsx';
import SearchPage from './Pages/SearchPage.jsx';
import PublicBloodDonationReq from './Pages/PublicBloodDonationReq.jsx';
import BloodDonationRequestDetailsPage from './Pages/BloodDonationRequestDetailsPage.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import About from './Pages/About.jsx';
import BecomeDonor from './Pages/BecomeDonor.jsx';
import Testimonials from './Pages/Testimonials.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import TermsPolicy from './Pages/TermsPolicy.jsx';


const router = createBrowserRouter([
  {
    path: "/" ,
    Component: Root ,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {index:true , Component:Home} ,
      {path:'register' , Component:Register} ,
      {path:'login' , Component:Login} ,
      {path:'fundings' , element: <PrivatePage><Fundings></Fundings></PrivatePage>} ,
      {path:'become-donor' , element: <PrivatePage><BecomeDonor></BecomeDonor></PrivatePage>} ,
      {path:'payment-success' , Component:PaymentSuccess} ,
      {path:'search-page' , Component:SearchPage} ,
      {path:'public-blood-donation-requests' , Component:PublicBloodDonationReq} ,
      {path:'about-us' , Component:About} ,
      {path:'testimonials' , Component:Testimonials} ,
      {path:'contact-us' , Component:ContactUs} ,
      {path:'terms-policy' , Component:TermsPolicy} ,
      // {path:'blood-donation-request-details/:id' , element: <PrivatePage><BloodDonationRequestDetailsPage></BloodDonationRequestDetailsPage></PrivatePage>} ,
      {path:'blood-donation-request-details/:id' , element: <BloodDonationRequestDetailsPage></BloodDonationRequestDetailsPage>} ,
    ]
  },


  // Dashboard layout
  {
    path: '/dashboard' ,
    element: <PrivatePage><DashboardLayout></DashboardLayout></PrivatePage> ,
    children: [
      {index:true , Component: DashboardHome} ,
      {path:'create-donation-request' , Component:CreateDonationRequest} ,
      {path:'my-donation-requests' , Component:MyDonationRequests} ,
      {path:'all-users' , Component:AllUsers} ,
      {path:'edit-donation-request/:id' , Component:EditDonationReq} ,
      {path:'all-blood-donation-request' , Component:AllBloodDonationRequests} ,
      {path:'profile' , Component:DashProfile} ,
      
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
