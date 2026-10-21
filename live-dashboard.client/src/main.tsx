import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h2 className='mb-3.5'>live dashboard</h2>
    <App />
  </StrictMode>,
)
