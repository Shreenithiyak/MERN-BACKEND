// 1️⃣ Variable Rendering Task
// Create a React component that displays:// Name // Age // City
// All values should come from variables and be rendered inside JSX.
function App(){
    const name="sri";
    const age="22";
    const city="chennai";
    return(
    <>
    <div>
        <h1>name:{name}</h1>
        <h1>Age:{age}</h1>
        <h1>city:{city}</h1>
    </div>     
    </>
    )
}
export default App  

// Create an object:// name // email // phone
// Display all values on the screen using JSX.
 function app(){
    const user={
        name:"sri",
        email:"sri@.com",
        phone:"12345"
    }
    return(
    <>
     <h1>name:{user.name}</h1>
     <h1>email:{user.email}</h1>
     <h1>phone:{user.phone}</h1>
    </>
    )
 }
export  {app}

// Create an array of fruits:// Apple// Mango// Orange// Banana
// Render them in a list using .map().
function arr(){
    const fruits=["apple","mango","orange","banana"];
    return( 
    <>
     <ul>
        {fruits.map((fruits)=>
         <li>{fruits}</li>)}
     </ul>


    </>
    )
}
export {arr}

// Create a users array like:// id// name// age
// Display each user's name and age on the screen.
function person(){
      const users=[
           {id:1,name:"sri",age:22},
           {id:2,name:"sri",age:22},
           {id:3,name:"sri",age:22},
      ];
      return(
      <>
      <ul>
        {users.map((users)=>
         <li>{users.name}</li>)}
      </ul>

      </>
      )
}
export{person}

// name// John
// skills (array)// - HTML// - CSS// - JavaScript
function users(){
    const userss=
               {name:"John",
               skills:["HTML","CSS","JavaScript"]};
    return(
        <>
        <h1>{user.name}</h1>
        <ul>
            {userss.skills.map((skills)=>
            <li>{skills}</li>)}
        </ul>
        </>
        )
}
export{users}

// Create a variable:// isLoggedIn
// If true → show Welcome User
// If false → show Please Login
function login(){
    const isloggedin=true;
    return(<>
    {isloggedin?<h1>welcome user</h1>:<h1>pls login</h1>}</>)
}
export {login}

// Create a variable:
// age
// If age >= 18 show:
// Adult
// Otherwise show:// Minor
 const age=23;
 function age(){
    return(<>
    {age>=18?<h1>adult</h1>:<h1>minor</h1>}</>)
 }
 export {age}

// Create a variable:// isAdmin
// If true → display Admin Dashboard
// If false → show nothing.
const isAdmin=true;
function admin(){
  if(isAdmin){
    return
    <h1>admin dashboard</h1>
  }
  return<h1>pls login</h1>
}
export{admin}

// Create object:
// user
//  └ address
//      └ city
// Render the city using optional chaining so the app doesn't crash if address is missing
function App(){

 const user = {
  name:"sri",
  address:{
    city:"Chennai"
  }
 }

 return <h1>{user?.address?.city}</h1>

}
export{App}

// Create variable:
// username// If username is null or undefined, show
// Guest User// Otherwise show the username.
function App(){
 const user = {
  name:null
 }

 return(
   <h1>{user.name ?? "Guest User"}</h1>
 )

}
export{App}
















