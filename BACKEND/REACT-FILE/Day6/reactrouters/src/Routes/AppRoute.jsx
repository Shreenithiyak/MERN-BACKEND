import {Route, Routes } from "react-router-dom"
import Createphase from "../pages/Createphase"
import Updatephase from "../pages/Updatephase"
import Introduction from "../pages/Introduction"

const  AppRoute  = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Introduction/>}/>
      <Route path="/createphase" element={<Createphase/>}/>
      <Route path="/updatephase" element={<Updatephase/>}/>

    </Routes>
    
    
    </>
  )
}

export default  AppRoute 