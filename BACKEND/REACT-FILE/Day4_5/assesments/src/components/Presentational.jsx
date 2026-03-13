
const Presentational = ({passdata}) => {
  //console.log(passdata);
    return (
   <>
   <div>
    {passdata.map((e,i)=>(
       <div key={i}>
      <h1>{e.id}</h1>
      <p>{e.name}</p>
      <p>{e.age}</p>
       </div>
    ))}
   </div>
   
   
   </>
  )
}

export default Presentational