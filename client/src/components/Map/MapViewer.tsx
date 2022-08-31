import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'

import LocationMarker from './LocationMarker'

export default function MapViewer() {
  return (
    <MapContainer
      center={{ lat: -34.1701297, lng: -70.7384822}}
      zoom={17}
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
