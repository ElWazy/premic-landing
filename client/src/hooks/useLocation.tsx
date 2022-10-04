import { LatLngExpression } from 'leaflet'
import { useMapEvents } from 'react-leaflet'
import { useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:5000')

function useLocation() {
  const [position, setPosition] = useState<LatLngExpression>({ lat: 0, lng: 0 })
  const map = useMapEvents({
    click() {
      map.locate({ enableHighAccuracy: true, watch: true })
    },
    locationfound(location) {
      setPosition(location.latlng)
      socket.emit('update_location', location.latlng)
      map.flyTo(location.latlng, map.getZoom())
    },
    locationerror(error) {
      throw new Error(error.message)
    }
  })

  return { position }
}

export default useLocation
