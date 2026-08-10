import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import { LanguageProvider } from './contexts/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </LanguageProvider>
  )
}
