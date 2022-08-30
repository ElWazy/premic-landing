import { Container } from '@mui/material'
import 'leaflet/dist/leaflet.css'
import { LatLngExpression } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function MapViewer() {
  const position: LatLngExpression = [-33.4727092, -70.7699141]
  return (
    <Container 
      component="main" 
      maxWidth="md"
      sx={{ mb: 6 }}
    >
      <MapContainer
        center={position}
        zoom={11}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Bienvenido a Santiago
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  )
}
