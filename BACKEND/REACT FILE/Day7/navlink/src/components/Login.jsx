
function About(){
  return(
    <div style={{padding:"20px"}}>
      <h2>About Our College</h2>
      <p>
        ABC College provides quality education in technology, science and management programs. 
        Our experienced faculty members are dedicated to providing students with the best possible education. 
        <Link to="/Profile">Learn more about our faculty members</Link>
      </p>
      <p>
        We have a strong industry network and our graduates have been placed in top companies. 
        <Link to="/Dashboard">View our placement records</Link>
      </p>
    </div>
  )
}
export default About
