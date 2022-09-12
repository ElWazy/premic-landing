import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'

import LocationMarker from './LocationMarker'

import geoData from '../../assets/map.json'

export default function MapViewer() {

  return (
    <MapContainer
      center={{ lat: -34.1701297, lng: -70.7384822 }}
      zoom={17}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      <GeoJSON data={geoData} />
    </MapContainer>
  )
}
