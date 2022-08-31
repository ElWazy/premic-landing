import { List, ListItem, ListItemText } from "@mui/material"
import User from "../models/User"

function UsersConnectedList({ users }: { users: User[] }) {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        maxHeight: 350,
        position: 'relative',
        overflow: 'auto'
      }}
    >
      {users.map((user, index) => (
        <ListItem key={index}>
          <ListItemText>
            {index} User connected
          </ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default UsersConnectedList