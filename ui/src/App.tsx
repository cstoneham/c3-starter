import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [apiStatus, setApiStatus] = useState<string | null>(null)
  const [apiError, setApiError] = useState<string | null>(null)

  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/health')
        if (response.ok) {
          const data = await response.json()
          setApiStatus(data.status)
          setApiError(null)
        } else {
          setApiError(`API Error: ${response.statusText}`)
          setApiStatus(null)
        }
      } catch (err) {
        setApiError(`API Connection Error: ${err instanceof Error ? err.message : String(err)}`)
        setApiStatus(null)
      }
    }

    checkApiStatus()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rainmaker UI</h1>
      
      <div className="api-status-container">
        <h2>API Status</h2>
        {apiStatus && (
          <div className="api-status success">
            API Status: {apiStatus}
          </div>
        )}
        {apiError && (
          <div className="api-status error">
            {apiError}
          </div>
        )}
        {!apiStatus && !apiError && (
          <div className="api-status loading">
            Checking API status...
          </div>
        )}
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
