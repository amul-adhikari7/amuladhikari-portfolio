import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

// Initial render: only the app (keep analytics out of the initial bundle)
try {
  root.render(
    <>
      <App />
    </>
  )
} catch (error) {
  console.error('Render error:', error)
  // Try a minimal fallback render
  root.render(
    <>
      <App />
    </>
  )
}

// Lazy-load analytics after the app has mounted to reduce main bundle size
// This avoids render-blocking and heavy initial JS. Errors are caught to
// ensure analytics failures don't affect the app.
if (typeof window !== 'undefined') {
  // Only enable Vercel analytics/speed-insights in production builds
  // and when not running on localhost. This avoids dev-time 404s like
  // /_vercel/insights/script.js and the message-channel async listener errors
  // caused by analytics trying to inject scripts on a non-vercel host.
  const isProd = Boolean(import.meta.env && import.meta.env.PROD)
  const hostname = (window.location.hostname || '').toLowerCase()
  const isLocalhost = Boolean(
    hostname === 'localhost' ||
      hostname === '::1' ||
      /^127\./.test(hostname) ||
      /^10\./.test(hostname) ||
      /^192\.168\./.test(hostname) ||
      /^169\.254\./.test(hostname) ||
      /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(hostname)
  )

  if (isProd && !isLocalhost) {
    // Defer to next tick so the initial paint can complete
    window.requestAnimationFrame(() => {
      // Analytics (vercel)
      import('@vercel/analytics/react')
        .then(mod => {
          const Analytics = mod && (mod.Analytics || mod.default)
          if (!Analytics) return
          try {
            const container = document.createElement('div')
            container.setAttribute('id', 'vercel-analytics-root')
            document.body.appendChild(container)
            createRoot(container).render(
              React.createElement(Analytics, { debug: false })
            )
          } catch (err) {
            console.warn('Vercel Analytics mount failed', err)
          }
        })
        .catch(err => console.warn('Vercel Analytics import failed', err))

      // Speed Insights (vercel) - optional
      import('@vercel/speed-insights/react')
        .then(mod => {
          const SpeedInsights = mod && (mod.SpeedInsights || mod.default)
          if (!SpeedInsights) return
          try {
            const sContainer = document.createElement('div')
            sContainer.setAttribute('id', 'vercel-speedinsights-root')
            document.body.appendChild(sContainer)
            createRoot(sContainer).render(
              React.createElement(SpeedInsights, { debug: false })
            )
          } catch (err) {
            console.warn('SpeedInsights mount failed', err)
          }
        })
        .catch(err => console.warn('SpeedInsights import failed', err))
    })
  }
}
