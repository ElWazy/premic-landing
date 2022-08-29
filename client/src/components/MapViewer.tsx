import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapViewer() {
  return (
    <MapContainer
      center={[-33.4727092, -70.7699141]}
      zoom={11}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-33.4727092, -70.7699141]}>
        <Popup>
          Bienvenido a Santiago
        </Popup>
      </Marker>
    </MapContainer>
  )
}
