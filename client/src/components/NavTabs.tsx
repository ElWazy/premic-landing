import Container from '@mui/material/Container'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

import {
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom'

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation()

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i]
    const possibleMatch = matchPath(pattern, pathname)
    if (possibleMatch !== null) {
      return possibleMatch
    }
  }

  return null
}

function MyTabs() {
  const routeMatch = useRouteMatch(['/sign-in', '/', '/sign-up'])
  const currentTab = routeMatch?.pattern?.path

  return (
    <Tabs value={currentTab} centered>
      <Tab label="Sign In" value="/sign-in" to="/sign-in" component={Link} />
      <Tab label="Map" value="/" to="/" component={Link} />
      <Tab label="Sign Up" value="/sign-up" to="/sign-up" component={Link} />
    </Tabs>
  );
}

function NavTabs() {
  return (
    <Container maxWidth="md">
      <MyTabs />
    </Container>
  )
}

export default NavTabs
