import { useState } from 'react'
import axios from 'axios'

import EarthMap from '../components/EarthMap'
import SkyMap from '../components/SkyMap'

function MapPage({
  city,
  setCity,
  position,
  setPosition,
}) {
  const [searchCity, setSearchCity] = useState('')

  const getCityName = async (lat, lng) => {
    try {
      const response = await axios.get(
  `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=en`
)
      

      const address = response.data.address

      setCity(
        address.city ||
          address.town ||
          address.village ||
          address.state ||
          'Unknown Location'
      )
    } catch (error) {
      console.error(error)
      setCity('Unknown Location')
    }
  }
const getMyLocation = () => {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude
      const lng = position.coords.longitude

      setPosition({
        lat,
        lng,
      })

      await getCityName(lat, lng)
    },
    (error) => {
      console.error(error)
      alert('Unable to get location')
    }
  )
}
const searchLocation = async () => {
  try {
    const response = await axios.get(
  `https://nominatim.openstreetmap.org/search?format=json&q=${searchCity}&accept-language=en`
)
    

    if (response.data.length === 0) {
      alert('City not found')
      return
    }

    const result = response.data[0]

    setPosition({
      lat: parseFloat(result.lat),
      lng: parseFloat(result.lon),
    })

    setCity(result.display_name)
  } catch (error) {
    console.error(error)
  }
}
const resetLocation = () => {
  setPosition(null)
  setCity('')
  setSearchCity('')
}
  return (
    <div>
      <h1>🌍 Earth Map</h1>
      <p style={{ opacity: '0.8' }}>
  Select any location on Earth
</p>
      <div style={{ marginBottom: '20px' }}>
  <input
    type="text"
    placeholder="Search city..."
    value={searchCity}
    onChange={(e) => setSearchCity(e.target.value)}
  />

  <button
    onClick={searchLocation}
    style={{ marginLeft: '10px' }}
  >
    Search
  </button>
</div>
      <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  }}
>
  <button
    onClick={getMyLocation}
    style={{
      padding: '10px 20px',
      cursor: 'pointer',
    }}
  >
    📍 Use My Location
  </button>

  <button
    onClick={resetLocation}
    style={{
      padding: '10px 20px',
      cursor: 'pointer',
      background: '#dc2626',
    }}
  >
    🔄 Reset Location
  </button>
</div>
      <EarthMap
        position={position}
        setPosition={setPosition}
        getCityName={getCityName}
      />

      <SkyMap
        city={city}
        position={position}
      />
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

export default MapPage