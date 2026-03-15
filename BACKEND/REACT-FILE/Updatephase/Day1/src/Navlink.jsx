import { NavLink } from "react-router-dom"

const Navlink = () => {
  return (
    <div className="flex flex-row items-center gap-4 mt-20 justify-between bg-amber-950 text-white p-4">

      <NavLink to="/">Counter</NavLink>

      <NavLink to="/username">Username</NavLink>

      <NavLink to="/userage">UserAge</NavLink>

      <NavLink to="/toggle">Toggle</NavLink>

      <NavLink to="/profile">Profile</NavLink>

    </div>
  )
}

export default Navlink