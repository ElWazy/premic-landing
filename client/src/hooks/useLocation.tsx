import { LatLngExpression } from 'leaflet'
import { useMapEvents } from 'react-leaflet'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:5000', {
  withCredentials: true
})

interface Location {
  id: string;
  coords: LatLngExpression;
}

function useLocation() {
  const [positions, setPositions] = useState<Array<Location>>([])

  useEffect(() => {
    socket.on('list', (locations) => {
      setPositions(locations)
    })

    return () => {
      socket.off('list')
    }
  }, [])

  const map = useMapEvents({
    click() {
      map.locate({ enableHighAccuracy: true, watch: true })
    },
    locationfound(location) {
      socket.emit('update', location.latlng)
      map.flyTo(location.latlng, map.getZoom())
    },
    locationerror(error) {
      throw new Error(error.message)
    }
  })

  return { positions }
}

export default useLocation
