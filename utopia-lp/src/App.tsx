import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NameListPage from './pages/NameListPage'

const App: React.FC = () => {
  return (
    <Routes>
      {/* LP のメインページ */}
      <Route path="/" element={<HomePage />} />
      {/* 名簿一覧ページ（別ページ遷移） */}
      <Route path="/namelist" element={<NameListPage />} />
    </Routes>
  )
}

export default App
