import { useEffect, useState } from 'react'
import { getISSPosition } from '../services/iss'
import { getVisibleObjects } from '../services/astronomy'

function SkyPage({ city, position }) {
  const [iss, setIss] = useState(null)

  useEffect(() => {
    const fetchISS = async () => {
      const data = await getISSPosition()
      setIss(data)
    }

    fetchISS()
  }, [])

  const skyData = position
    ? getVisibleObjects(position.lat)
    : null

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '100px',
      }}
    >
      <h1>🌌 Sky View</h1>

      <p
        style={{
          opacity: '0.8',
          marginBottom: '30px',
        }}
      >
        Discover what is visible above your location
      </p>

      {position ? (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              flexWrap: 'wrap',
              marginTop: '30px',
            }}
          >
            <div
              style={{
                width: '320px',
                padding: '20px',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '15px',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 0 15px rgba(95,168,255,0.15)',
              }}
            >
              <h2>🪐 Visible Planets</h2>

              {skyData.planets.map((planet) => (
                <p key={planet}>{planet}</p>
              ))}
            </div>

            <div
              style={{
                width: '320px',
                padding: '20px',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '15px',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 0 15px rgba(95,168,255,0.15)',
              }}
            >
              <h2>⭐ Visible Constellations</h2>

              {skyData.constellations.map((constellation) => (
                <p key={constellation}>{constellation}</p>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Select a location on the map first.</p>
      )}

      <div
        style={{
          width: '90%',
          maxWidth: '420px',

          margin: '30px auto',
          padding: '20px',
          borderRadius: '15px',
          border: '1px solid rgba(255,255,255,0.15)',
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(5px)',
          boxShadow: '0 0 15px rgba(95,168,255,0.15)',
        }}
      >
        <h2>🛰 ISS Status</h2>

        {iss ? (
          <>
            <p>📍 Latitude: {iss.latitude.toFixed(2)}°</p>
            <p>📍 Longitude: {iss.longitude.toFixed(2)}°</p>
            <p>📏 Altitude: {iss.altitude.toFixed(2)} km</p>
          </>
        ) : (
          <p>Loading ISS data...</p>
        )}
      </div>


    <p
  style={{
    opacity: '0.5',
    marginTop: '50px',
    fontSize: '0.9rem',
    textAlign: 'center',
  }}
>
  SkyDome © AstralWeb  🚀
</p>
    </div>
  )
}

export default SkyPage