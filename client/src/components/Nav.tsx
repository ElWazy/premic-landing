import { Route, Routes } from "react-router-dom"

import LandingPage from "./LandingPage"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import NoMatch from "./NoMatch"
import SocketPlayground from "./SocketPlayground"

function Nav() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route index element={<SocketPlayground />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default Nav
