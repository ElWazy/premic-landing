import { Marker, Popup } from 'react-leaflet'

import UserIcon from './UserIcon'
import useLocation from '../../hooks/useLocation'

function LocationMarker() {
  const { positions } = useLocation()

  return (
    <>
      {positions.map(position => (
        <div id={position.id}>
          <Marker
            position={position.coords}
            icon={UserIcon}
          >
            <Popup>You are here</Popup>
          </Marker>
        </div>
      ))}
    </>
  )
}

export default LocationMarker
