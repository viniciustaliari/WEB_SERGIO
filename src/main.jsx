import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LanguageProvider } from './context/LanguageContext'
import { ProjectNavigationProvider } from './context/ProjectNavigationContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ProjectNavigationProvider>
        <App />
      </ProjectNavigationProvider>
    </LanguageProvider>
  </React.StrictMode>,
)
