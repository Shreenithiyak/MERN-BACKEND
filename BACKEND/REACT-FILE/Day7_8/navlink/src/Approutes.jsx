import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Dashboardlayout from "./components/Layout"
import Dashboard from "./components/Dashboard"
import Profile from "./components/Profile"
import Register from "./components/Register"


const Approutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />

      <Route element={<Dashboardlayout/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Route>

    </Routes>
    </>
  )
}

export default Approutes






