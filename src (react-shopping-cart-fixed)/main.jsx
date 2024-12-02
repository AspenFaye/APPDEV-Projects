import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//renders the ROOT COMPONENT
//ROOT(main)
///APP - 1) login Compoent, 2) Authenticator Component
////1) Login - Main
////2) Authenticator - 1) Shop, 2) Admin Panel
/////Shop (from Authenticator) - Main
/////Main (from Login) - Shop


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
