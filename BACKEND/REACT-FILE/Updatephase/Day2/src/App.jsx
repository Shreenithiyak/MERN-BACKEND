// Create a counter with Increase and Decrease buttons using prev state update.

import { useState } from "react"

function App() {

  const [count, setCount] = useState(0)
  const[toggle,setToggle] = useState()

  const increase = () => {
    setCount(prev=> prev+1 )
     setCount(prev=> prev+1 )
  }
  const decrease = () => {
    setCount(prev=> prev-1 )
  }

const toggleStatus = () => {
    setToggle(prev =>!prev)
  }


  return (
    <>
    <div className="flex flex-col items-center gap-4 mt-20">
      <div className="bg-pink-300 shadow-md rounded-lg p-20">
        <h1 className="text-2xl font-bold"> Count : {count} </h1>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-green-500 text-white px-4 py-2" onClick={increase}> Increase </button>
          <button className="bg-red-500 text-white px-4 py-2" onClick={decrease}> Decrease</button>
        </div>
      </div>
  
     <h1>Status:{toggle?"correct counter":"wrong logic couter"}</h1>
     <button className="text-bold" onClick={toggleStatus}>Toggle</button>





    </div>

   




    </>
  )
}

export default App