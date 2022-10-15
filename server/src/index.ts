import { AddressInfo } from 'net'
import server from './PremicSocketServer'

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  const info: AddressInfo = server.address() as AddressInfo
  console.log(`Listen on http://localhost:${info.port}`)
})
