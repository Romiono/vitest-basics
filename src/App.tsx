import './App.css'
import {NavLink, Outlet} from "react-router";
import {RoutParser, Routs} from './routing/Routs'

function App() {
  const routes = RoutParser(Routs)

  return (
    <div className='container'>
      <nav>
        {routes.map((route) =>
           <NavLink to={route.path}>{route.path}</NavLink>
        )}
      </nav>
            <Outlet/>
    </div>
  )
}

export default App
