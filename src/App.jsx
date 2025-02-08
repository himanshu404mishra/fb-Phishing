
import { Outlet } from "react-router"
import "./App.css"
import { ToastContainer } from "react-toastify"
import { Bounce } from "react-toastify"

const App = () => {

  
  return (
    <>
      <Outlet/>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
    </>
  )
}

export default App