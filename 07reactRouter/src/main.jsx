import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
import { RouterProvider } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>

  <RouterProvider router={router} />
    
  </StrictMode>,
)
