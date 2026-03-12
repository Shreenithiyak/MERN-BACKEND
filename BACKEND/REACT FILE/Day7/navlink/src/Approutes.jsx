import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Dashboardlayout from "./components/Layout"
import Dashboard from "./components/Dashboard"
import Profile from "./components/Profile"


const Approutes = () => {
  return (
    <>
    <Routes>
    <Route element={< Dashboardlayout/>}>
  
    <Route path="/ Dashboard" element={< Dashboard/>}/>
    <Route path="/ Profile" element={<Profile/>}/>
    </Route>

    <Route path="/" element={<Login/>} />
    
    </Routes>
    </>
  )
}

export default Approutes