import { Socket } from "socket.io"
import { Coords } from '../../types/Coords'
import { Location } from "../../types/Location"

const locations: Map<string, Location> = new Map()

export const trackerSocket = (socket: Socket) => {
  socket.on('update', (coords: Coords) => {
    const location = { id: socket.id, coords }
    locations.set(socket.id, location)

    const result = Array.from(locations.values())
    socket.broadcast.emit('list', result)
  })

  socket.on('disconnect', (_reason) => {
    locations.delete(socket.id)
    const result = Array.from(locations.values())
    socket.broadcast.emit('list', result)
  })
}
