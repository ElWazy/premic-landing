import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Copyright from './Copyright'

function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', pb: 4 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Team Yuntas
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        "Por el tiempo de las personas"
      </Typography>
      <Copyright />
    </Box>
  )
}

export default Footer
