import {Route, Routes } from "react-router-dom"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import ContentCard from "../pages/ContentCard"
import Introduction from "../pages/Introduction"

const  AppRoute  = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/ContentCard" element={<ContentCard/>}/>
      <Route path="/Introduction" element={<Introduction/>}/>
    </Routes>
    
    
    </>
  )
}

export default  AppRoute 