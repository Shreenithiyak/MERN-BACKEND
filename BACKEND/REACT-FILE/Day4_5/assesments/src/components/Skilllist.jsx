import React from 'react'

const Skilllist = ({list}) => {
  return (
   <>
   <div>
     {list.map((e,i)=>(
       <div key={i}>
          <h1>{e.name}</h1>
          <ul>{e.skill.map((i)=>(
            <li key={i}>{i}</li>
          ))}
          </ul>

       </div>
     ))}
 

   </div>
   
   
   
   </>
  )
}

export default Skilllist