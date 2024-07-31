import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import AdminPage from './components/Admin/AdminPage.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Signup from './components/SignUp/Signup.jsx'
import Dashbord from './components/Dashbord/Dashbord.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{
      path: '',
      element: <Home />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path:'contact',
      element: <Contact/>
    },
    {
      path:'signup',
      element: <Signup />
    },
    {
      path:'dashbord',
      element: <Dashbord />
    },
    {
      path:'adminpage',
      element:<AdminPage/>,
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
