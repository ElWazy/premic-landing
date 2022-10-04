import { Marker, Popup } from 'react-leaflet'

import UserIcon from './UserIcon'
import useLocation from '../../hooks/useLocation'


function LocationMarker() {
  const { position } = useLocation()

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
