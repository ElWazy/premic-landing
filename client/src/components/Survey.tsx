import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

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
        src="link-to-survey"
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
