import React, {useState } from 'react'
import "./Banner.css"
import { BANNER__DATA } from '../../data/BANNER__DATA'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
function Banner() {
    const [imageIndex, setImageIndex] = useState(0);
     
    const goLeft = () => {
        if(imageIndex === 0){
            setImageIndex(3)
        }
        else{
            setImageIndex(prev => prev - 1)
        }
    }
    const goRight = () => {
        if(imageIndex === 3){
            setImageIndex(0)
        }
        else{
            setImageIndex(prev => prev + 1)
        }
    }
    return (
        <div className="banner">
           <button onClick={goLeft}><FiChevronLeft/></button>
           <img src={BANNER__DATA[imageIndex].imageURL} alt="" />
           <button onClick={goRight}><FiChevronRight/></button>
        </div>
    )
}

export default Banner
