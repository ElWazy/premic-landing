import { Container, Typography } from '@mui/material'

function Survey() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" py={2} paragraph>
        Premic nace a partir de un proyecto de instituto.
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" pb={6} paragraph>
        A si que nos ayudaría mucho que puedas responder 
        la encuesta si te gustaría que el proyecto se vuelva realidad en un futuro.
      </Typography>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSfM34l6_zhHnzbwV5ZVbcMGt3OCBbtvulUQIQjjXzeSLQDPeA/viewform?embedded=true" 
        width="100%" 
        height="667" 
        frameBorder="0" 
        marginHeight={0} 
        marginWidth={0}
      >
        Cargando…
      </iframe>
    </Container>
  )
}

export default Survey
