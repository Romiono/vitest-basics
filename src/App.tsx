import './App.css'
import {NavLink, Outlet} from "react-router";
import {RoutParser, Routs} from './routing/Routs'

function App() {
  const routes = RoutParser(Routs)

  return (
    <>
      <nav>
        {routes.map((route) =>
           <NavLink to={route.path}>{route.path}</NavLink>
        )}
      </nav>
      <Outlet/>
    </>
  )
}

export default App
