import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

const root = createRoot(document.getElementById('root'))

// Wrap render in a try-catch to handle any potential message channel errors
try {
  root.render(
    <>
      <App />
      <Analytics debug={false} />
      <SpeedInsights debug={false} />
    </>
  )
} catch (error) {
  console.error('Render error:', error)
  // Fallback render without analytics if there's an error
  root.render(
    <>
      <App />
    </>
  )
}
