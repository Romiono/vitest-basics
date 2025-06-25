import './App.css'
import {NavLink, Outlet} from "react-router";
import {Routs} from './routing/Routs'

function App() {

  return (
    <>
      <nav>
        {Routs.map((route) =>
           <NavLink to={route.path}>{route.path}</NavLink>
        )}
        {Routs[0].children.map((child) =>
            <NavLink to={child.path}>{child.path}</NavLink>
        )}
      </nav>
      <Outlet/>
    </>
  )
}

export default App
