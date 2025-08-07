import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App.tsx'
import ErrorMessageProvider from './shared/components/ErrorMessageProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorMessageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorMessageProvider>
  </StrictMode>,
)
