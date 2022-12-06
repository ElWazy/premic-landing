import { Socket } from "socket.io"
import { Coords } from '../../models/Coords'
import { BusCoordinate } from "../../models/BusCoordinate"

const busCoordinates: Map<string, BusCoordinate> = new Map()

export const trackerSocket = (socket: Socket) => {
  socket.on('update', (coords: Coords) => {
    const location = { id: socket.id, coords }
    busCoordinates.set(socket.id, location)

    const result = Array.from(busCoordinates.values())
    socket.broadcast.emit('list', result)
  })

  socket.on('disconnect', (_reason) => {
    busCoordinates.delete(socket.id)
    const result = Array.from(busCoordinates.values())
    socket.broadcast.emit('list', result)
  })
}
