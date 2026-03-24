import { Link } from 'react-router-dom'
import AppRoute from './Routes/AppRoute'

const App = () => {
  return (
    <>
      <div>
        <nav className="flex bg-blue-500 p-4 items-center">
          
          <h1 className="text-lg sm:text-xl md:text-3xl text-white">
            ASSIGNMENTS
          </h1>

          <div className="flex ml-auto gap-4 sm:gap-6 md:gap-9 text-sm sm:text-lg md:text-2xl">
            <Link to="/" className="text-white hover:text-green-500">Introduction</Link>
            <Link to="/createphase" className="text-white hover:text-green-500">Create Phase</Link>
            <Link to="/updatephase" className="text-white hover:text-green-500">Update Phase</Link>
          </div>

        </nav>

        <AppRoute />
      </div>
    </>
  )
}

export default App