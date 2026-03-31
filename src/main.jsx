import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initLogoEffects } from './utils/effects'

// Llama tus utilidades de migración heredada aquí (o si prefieres, dentro de un componente)
initLogoEffects();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
