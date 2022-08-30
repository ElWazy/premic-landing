import { useState, useEffect, FormEventHandler } from 'react'
import io from 'socket.io-client'

const socket = io('/')

function Chat() {
  const [messages, setMessages] = useState<string[]>([])
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    const receiveMessage = (message: string) => {
      setMessages([message, ...messages])
    }

    socket.on('message', receiveMessage)

    return () => {
      socket.off('message', receiveMessage)
    }
  }, [messages])

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    setMessages([message, ...messages])
    setMessage('')
    socket.emit('message', message)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          name="message"
          type="text"
          placeholder="Write here.."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          autoFocus
        />
      </form>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <b>{message}</b>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Chat
