import L from 'leaflet'

const UserIcon = L.icon({
  iconUrl: require('../../assets/user.svg'),
  iconRetinaUrl: require('../../assets/user.svg'),
  iconSize: [35, 35],
  className: "leaflet-user-icon"
})

export default UserIcon
