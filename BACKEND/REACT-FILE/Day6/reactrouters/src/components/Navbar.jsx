import { Link } from "react-router-dom"


const Navbar = () => {
  return (
   <>
 <div className='bg-blue-300 p-6 '>
    <div className="flex ml-300 gap-9">
   <Link to ="/">INTROUDUCTION</Link>
   <Link to ="/createphase">CREATE PHASE</Link>
   <Link to ="/updatephase">UPDATE PHASE</Link>
   
    </div>
 </div>
   </>
  )
}

export default Navbar