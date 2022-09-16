import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'

import LocationMarker from './LocationMarker'

export default function MapViewer() {
  const coords = [-34.1640079, -70.7709722]
  return (
    <MapContainer
      center={{ lat: coords[0], lng: coords[1] }}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  )
}
