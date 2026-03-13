import h1 from '../assets/img.png/h1.png'
import h2 from '../assets/img.png/h2.png'
import h3 from '../assets/img.png/h3.png'
import h4 from '../assets/img.png/h4.png'
import h5 from '../assets/img.png/h5.png'

const Homepage =() =>{
    return(
    <>
      <div className="banner">

      <img src={h1} alt="h1.png" />
       <img src={h2} alt="h2.png" />
        <img src={h3} alt="h3.png" />
         <img src={h4} alt="h4.png" />
          <img src={h5} alt="h5.png" />
      </div>
      
    
    </>
    )
}
export default Homepage
