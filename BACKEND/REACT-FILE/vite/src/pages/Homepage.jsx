import { useState } from "react";
import h1 from '../assets/img.png/h1.png'
import h2 from '../assets/img.png/h2.png'
import h3 from '../assets/img.png/h3.png'
import h4 from '../assets/img.png/h4.png'
import h5 from '../assets/img.png/h5.png'

import Navbar from '../components/Navbar'

const Homepage = () => {

  const images = [h1, h2, h3, h4, h5];
  const [index, setIndex] = useState(0);
const nextSlide = () => {
  setIndex((prev) => (prev + 1) % images.length);
};

const prevSlide = () => {
  setIndex((prev) => (prev - 1 + images.length) % images.length);
};
  return (
    <>
      <Navbar />

      <div className="w-full flex justify-center mt-20">
        <div className="w-[1500px] h-[700px]  overflow-hidden rounded-xl shadow-lg">

          <div className="flex transition-transform duration-700"style={{ transform: `translateX(-${index * 100}%)` }} >
            {images.map((img, i) => (
              <img key={i} src={img} alt={`slide-${i}`} className="w-[1500px] h-[700px]  object-cover flex-shrink-0" />
            ))}
            

          </div>
    <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded" >
      ◀
    </button>
    
    <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded" >
      ▶
    </button>
        </div>
      </div>
    </>
  )
}

export default Homepage;