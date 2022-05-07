import React from 'react'
import { BsStarFill,BsStarHalf,BsStar } from 'react-icons/bs';


const RatingStar = ({values}) => {
    
  return (
    <div>        
            
            <span>{values>=1 ? <BsStarFill/> : values>=0.5 ? <BsStarHalf/> : <BsStar/> }</span>
            <span>{values>=2 ? <BsStarFill/> : values>=1.5 ? <BsStarHalf/> : <BsStar/> }</span>
            <span>{values>=3 ? <BsStarFill/> : values>=2.5 ? <BsStarHalf/> : <BsStar/> }</span>
            <span>{values>=4 ? <BsStarFill/> : values>=3.5 ? <BsStarHalf/> : <BsStar/> }</span>
            <span>{values>=5 ? <BsStarFill/> : values>=4.5 ? <BsStarHalf/> : <BsStar/> }</span>
        
        </div>
  )
}

export default RatingStar

