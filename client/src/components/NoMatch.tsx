import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

function NoMatch() {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="md">
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="red"
        >
          Not Found 404
        </Typography>
      </Container>
    </Box>
  )
}

export default NoMatch
