
import { Outlet } from "react-router"
import "./App.css"
import { Navbar } from "./components"

const App = () => {
 
  
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App