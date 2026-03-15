import { Route, Routes } from 'react-router-dom'
import Toggle from './components/Toggle'
import Username from './components/Username'
import UserAge from './components/UserAge'
import Profile from './components/Profile'
import Counter from './components/Counter'
const Approute = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Counter/>}></Route>
    <Route path="/Toggle" element={<Toggle/>}></Route>
    <Route path="/Username" element={<Username/>}></Route>
    <Route path="/Userage" element={<UserAge/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
   </Routes>
   
   </>
  )
}

export default Approute