import { LatLngExpression } from 'leaflet'
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { useState } from 'react'

import UserIcon from './UserIcon'

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
    <Marker
      position={position}
      icon={UserIcon}
    >
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default LocationMarker
