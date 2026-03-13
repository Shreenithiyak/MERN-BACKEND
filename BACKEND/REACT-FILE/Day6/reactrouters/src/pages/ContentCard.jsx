import { Link } from "react-router-dom"

const ContentCard = () => {
    const content=[{id:1,path:"/Introduction"},
        {id:2,path:""},
        {id:3,path:""},
        {id:4,path:""},
        {id:5,path:""},
        {id:6,path:""}];
    

  return (
    <>
    <div className="p-20 flex flex-wrap gap-6 justify-center ">
        {content.map((item)=>(
           <Link key={item.id} to={item.path}>
         {/* //  <h1>{item.tittle}</h1> */}
           </Link>
        ))}

        <div className="bg-red-400 justify-center items-center p-40 w-60  flex">
           <h1 className="justify-center items-center flex">Introduction</h1>
        
        </div>
        
        <div className="bg-red-400 justify-center items-center p-40 w-60  flex  ">
           <h1 className="justify-center items-center flex">Createphase</h1>
        </div>
       
        <div className="bg-red-400 justify-center items-center p-40 w-60  flex ">
           <h1 className="justify-center items-center flex">Component</h1>
        </div>

        <div className="bg-red-400 justify-center items-center p-40 w-60  flex ">
        <h1 className="justify-center items-center flex">Rendering</h1>
       </div>

      <div className="bg-red-400 justify-center items-center p-40 w-60  flex  ">
     <h1 className="justify-center items-center flex">props</h1>
        </div>
       
       <div className="bg-red-400 justify-center items-center p-40 w-60  flex ">
        <h1 className="justify-center items-center flex">RRD</h1>
        </div>

       </div> 
    
    </>
  )
}

export default ContentCard