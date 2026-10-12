import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante/:id" element={<Restaurant />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
