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
// Otherwise show:

// Minor