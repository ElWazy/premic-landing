import 'leaflet/dist/leaflet.css'
import { LatLng, LatLngExpression } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'

import User from '../models/User'
import { useEffect, useState } from 'react'

function LocationMarker() {
  const [position, setPosition] = useState<LatLngExpression>({ lat: 0, lng: 0})
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}


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
