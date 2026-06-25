import { useState } from 'react'

import LandingPage from './pages/LandingPage'
import MapPage from './pages/MapPage'
import SkyPage from './pages/SkyPage'
import RadarPage from './pages/RadarPage'

import './App.css'

function App() {
  const [page, setPage] = useState('landing')

  const [city, setCity] = useState('')
  const [position, setPosition] = useState(null)

  return (
    <>
      {page === 'landing' && (
        <LandingPage
          goToMap={() => setPage('map')}
        />
      )}

      {page === 'map' && (
        <>
          <MapPage
            city={city}
            setCity={setCity}
            position={position}
            setPosition={setPosition}
          />

          <div
            style={{
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            <button
              onClick={() => setPage('landing')}
            >
              ← Back
            </button>

            {' '}

            <button
              onClick={() => setPage('sky')}
            >
              Go To Sky View →
            </button>
          </div>
        </>
      )}

      {page === 'sky' && (
        <>
          <SkyPage
            city={city}
            position={position}
          />

          <div
            style={{
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            <button
              onClick={() => setPage('map')}
            >
              ← Back To Map
            </button>

            {' '}

            <button
              onClick={() => setPage('radar')}
            >
              Open Solar System Radar →
            </button>
          </div>
        </>
      )}

      {page === 'radar' && (
        <>
          <RadarPage />

          <div
            style={{
              textAlign: 'center',
              marginTop: '20px',
              marginBottom: '40px',
            }}
          >
            <button
              onClick={() => setPage('sky')}
            >
              ← Back To Sky View
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default App