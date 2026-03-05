import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router.tsx'
import { GlobalProvider } from '@/context/GlobalContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  </StrictMode>,
)
