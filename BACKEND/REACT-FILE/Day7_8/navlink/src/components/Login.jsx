import { Link, useNavigate } from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/dashboard")
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-40">

      <h1 className="text-2xl font-bold">Login</h1>

      <input className="border p-2" placeholder="Enter name"/>

      <button 
      onClick={handleLogin}
      className="bg-blue-500 text-white px-4 py-2">
        Login
      </button>

      <Link className="text-blue-600" to="/register">
        Create Account
      </Link>

    </div>
  )
}

export default Login