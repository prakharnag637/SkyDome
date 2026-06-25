import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap
} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

function LocationMarker({ setPosition, getCityName }) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng)
      getCityName(e.latlng.lat, e.latlng.lng)
    },
  })

  return null
}

function ChangeView({ position }) {
  const map = useMap()

  if (position) {
    map.setView(position, 8)
  }

  return null
}

function EarthMap({ position, setPosition, getCityName }) {
  return (
    <MapContainer
      center={[20, 78]}
      zoom={5}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

      <LocationMarker
        setPosition={setPosition}
        getCityName={getCityName}
      />

      <ChangeView position={position} />

      {position && <Marker position={position} />}
    </MapContainer>
  )
}

export default EarthMap