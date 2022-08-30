import { List, ListItem, ListItemText } from "@mui/material"

function UsersConnectedList() {
  let items = []
  for (let i = 0; i < 50; i++) {
    items.push(
      <ListItem>
        <ListItemText>
          {i} User connected
        </ListItemText>
      </ListItem>
    )
  }

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
      {items}
    </List>
  )
}

export default UsersConnectedList
