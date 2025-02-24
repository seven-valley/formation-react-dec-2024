import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import '@fortawesome/fontawesome-free/css/all.min.css'; // ici 
import 'bootstrap/dist/css/bootstrap.min.css'; // ici 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
