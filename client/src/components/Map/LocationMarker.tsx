import { LatLngExpression } from 'leaflet'
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { useState } from 'react'

function LocationMarker() {
  const [position, setPosition] = useState<LatLngExpression>({ lat: 0, lng: 0 })
  const map = useMapEvents({
    click() {
      map.locate({ enableHighAccuracy: true, watch: true })
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

export default LocationMarker
