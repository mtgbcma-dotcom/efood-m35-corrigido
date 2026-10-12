import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/roboto/latin-100.css'
import '@fontsource/roboto/latin-400.css'
import '@fontsource/roboto/latin-700.css'
import '@fontsource/roboto/latin-900.css'

import App from './App'
import { CartProvider } from './context/CartContext'
import { GlobalStyle } from './styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <GlobalStyle />
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)
