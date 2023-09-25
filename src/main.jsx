import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Donation from './components/Donation/Donation'
import Statistics from './components/Statistics/Statistics'
import Main from './components/Main/Main'
import Home from './components/Home/Home'
import HomeDonationCard from './components/HomeDonationCard/HomeDonationCard'
import DonationCardDetails from './components/DonationCardDetails/DonationCardDetails'

const router = createBrowserRouter([

  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
          path:'/',
          loader:() => fetch('donation.json'),
          element:<Home></Home>
      },
      {
        path:'/donation',
        element:<Donation></Donation>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/:donationId',
        loader:() => fetch('donation.json'),
        element:<DonationCardDetails></DonationCardDetails>
      }
    ]
  
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
