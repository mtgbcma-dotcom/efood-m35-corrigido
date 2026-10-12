import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

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
