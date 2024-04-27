import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HomeContextProvider from './context/HomeContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HomeContextProvider>
    <App />
  </HomeContextProvider>,
)
