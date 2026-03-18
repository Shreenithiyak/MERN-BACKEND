import{NavLink}from "react-router-dom"
import logo from '../assets/img.png/OIP1.PNG'

const Navbar = () => {
  return (
    <div className="bg-black text-white flex item-center p-4 justify-between">
    <div>
      <img className="w-auto h-18  " src={logo} alt="logo" />
    </div>
      <div className="flex flex-row gap-10 text-xl font-bold  items-center ">
        <NavLink to ="/"className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-500"} >Hollywood</NavLink>
        <NavLink to ="/Kollywood" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-500"}>Kollywood</NavLink>
        <NavLink to ="/Tollywood" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-500"}>Tollywood</NavLink>
        <NavLink to ="/Bollywood" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-500"}>Bollywood</NavLink>
      </div>
    </div>
  )
}

export default Navbar