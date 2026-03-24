import { useEffect, useState } from "react";


const Recipe = () => {

  const [data,setData] = useState([])
 const fetchData = async () =>{
     
  try {

    const fetchDataNew =await fetch("https://dummyjson.com/recipes")
    //console.log(fetchDataNew);
    const res =await fetchDataNew.json()
    console.log(res.users);
    setData(res.users)
    
  } catch (error) {

    console.log('Something error',error);
    
    
  }


 }

 useEffect(()=>{
  (async ()=>{
    fetchData()
  })()
 },[])


  return (
   <>
   <h1>Fetch Datas</h1>

   <div className="bg-black p-10 flex justify-center items-center gap-5 flex-wrap ">

  {data.map((e,i)=>(
    <div key={i} className="bg-amber-400 rounded-2xl flex flex-col gap-2   p-2 w-50 h-80">
    <img src={e.image} className="w-40" alt="" />
   <h1>{e.firstName}</h1>
   <p>{e.age}</p>
   </div>
  ))}
   </div>
   </>
  )
}

export default Recipe