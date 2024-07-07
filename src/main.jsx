import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Components/MainLayout/MainLayout'
import ErrorElement from './Components/ErrorElement/ErrorElement'
import Home from './Components/Home/Home'
import Favorites from './Components/Favorites/Favorites'
import  { LoginCard } from './Components/LogIn/LogIn'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/favorites',
        element: <Favorites/>
      },
      {
        path:'/login',
        element: <LoginCard/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
