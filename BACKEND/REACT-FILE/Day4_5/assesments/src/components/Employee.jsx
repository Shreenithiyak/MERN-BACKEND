
const Employee = ({data}) => {
  return (
   <>
   <div>
    {data.map((e,i)=>(
 <div key={i}>
     <h1>{e.name}</h1>
     <p>{e.role}</p>
     <p>{e.location}</p>
 </div>
    ))}
   </div>
   
   </>
  )
}

export default Employee