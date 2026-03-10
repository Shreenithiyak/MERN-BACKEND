import { Link } from "react-router-dom"


const Navbar = () => {
  return (
   <>
 <div className='bg-blue-300 p-6 '>
    <div className="flex ml-300 gap-9">
    <Link to ="/">Home</Link>
   <Link to ="/about">About</Link>
   <Link to ="/contact">Contact</Link>
    </div>
 </div>
   </>
  )
}

export default Navbar