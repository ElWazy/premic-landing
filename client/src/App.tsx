import { lazy, useEffect, useState } from 'react'
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar'

export interface State extends SnackbarOrigin {
  open: boolean;
}

const MapViewer = lazy(() => import('./components/Map/MapViewer'))

function App() {
  const [state, setState] = useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;


  useEffect(() => {
    handleClick({ vertical: 'top', horizontal: 'center' })()
  }, [])

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  }

  const handleClose = () => {
    setState({ ...state, open: false });
  };


  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Has click en el mapa para buscar locomoción!"
        autoHideDuration={3000}
        key={vertical + horizontal}
      />
      <MapViewer />
    </>
  )
}

export default App
