import { Marker } from 'react-leaflet'

import UserIcon from './UserIcon'
import useLocation from '../../hooks/useLocation'

function LocationMarker() {
  const { positions } = useLocation()

  const markers = positions.map(position => (
    <Marker
      key={position.id}
      position={position.coords}
      icon={UserIcon}
    >
    </Marker>
  ))

  return <>{markers}</>
}

export default LocationMarker
