import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import MapViewer from './MapViewer';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Premic
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h1"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Premic
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              No vuelvas a esperar la locomoción colectiva y ten control de tu tiempo.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="column"
              spacing={2}
              justifyContent="center"
            >
              <MapViewer />
              <FormControl fullWidth>
                <InputLabel id="locality-label">Localidad</InputLabel>
                <Select
                  labelId="locality-label"
                  id="locality"
                  label="Localidad"
                >
                  <MenuItem>Lo Miranda</MenuItem>
                  <MenuItem>Rancagua</MenuItem>
                  <MenuItem>San Francisco</MenuItem>
                  <MenuItem>Codegua</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} >
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Yunta {card}
                    </Typography>
                    <Typography>
                      Comparte en 160 palabras que haces
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Container maxWidth="md">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdHLL5yaKPPwMX5Z9PmM6mB8d4GwYcB6Z4wZ0dshGX8Y95DmQ/viewform?embedded=true"
          width="100%"
          height="667"
          frameBorder="0"
        >
          Cargando…
        </iframe>
      </Container>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
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
    </ThemeProvider>
  );
}
