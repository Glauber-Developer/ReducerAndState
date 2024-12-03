import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppState } from './AppState'
import { AppReducer } from './AppReducer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppState />
    <AppReducer />
  </StrictMode>,
)
