import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Container from './components/container.tsx'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Container/>
  </React.StrictMode>,
)
