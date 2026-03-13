
import  Presentational from "./Presentational"
import Productcard from "./Productcard"
import StudentMark from "./StudentMark"
import Skilllist from "./Skilllist"
import Employee from "./Employee"

const Container = () => {
    
   const Userlist=[{id:1,name:"sam",age:21},
    {id:2,name:"sri",age:21},
    {id:3,name:"rishi",age:21}];

const Data=[{id:1,productname:"gadget",price:15000},
    {id:2,productname:"neckband",price:15000},
    {id:3,productname:"mobile",price:15000}]; 

 const Mark=[{name:"Aps",mark:50},
    {name:"cristopher",mark:60},
    {name:"sri",mark:35}];

 const List=[{name:"sri",skill:["html","css","js"]},
 {name:"rishi",skill:["html","css","js"]},
 {name:"raj",skill:["html","css","js"]}];

 const profile=[{name:"a",role:"developer",location:"chennai"},{name:"b",role:"developer",location:"chennai"},]
  return (
    <>
    <Presentational passdata={Userlist}/>
    <Productcard transfer={Data}/>
    <StudentMark check={Mark}/>
    <Skilllist list={List}/>
    <Employee data={profile} />

    </>
  )
}

export default Container