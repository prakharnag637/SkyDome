function SkyMap({ city, position }) {
  if (!position) return null

  return (
    <div>
      <h2>Selected Location</h2>

      <p>City: {city || 'Loading...'}</p>

      <p>Latitude: {position.lat.toFixed(4)}</p>
      <p>Longitude: {position.lng.toFixed(4)}</p>

      <h2>Visible Objects</h2>

      <p>🟠 Jupiter</p>
      <p>🪐 Saturn</p>
      <p>⭐ Orion</p>
      <p>⭐ Taurus</p>



      
    </div>
  )
}

export default SkyMap