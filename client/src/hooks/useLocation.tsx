import { LatLngExpression } from 'leaflet'
import { useMapEvents } from 'react-leaflet'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:5000/', {
  path: '/tracker/'
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
      setPositions((lastPositions) => {
        const newPosition = {
          id: socket.id,
          coords: location.latlng
        }
        const positionFinded = lastPositions.find(position => position.id === newPosition.id)
        if (positionFinded === undefined) return [...lastPositions, newPosition]

        return lastPositions.map(position => {
          if (position.id === positionFinded.id) return newPosition
          return position
        })
      })
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
