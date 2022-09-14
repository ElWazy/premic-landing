import { Box, Container, Typography } from "@mui/material"

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
