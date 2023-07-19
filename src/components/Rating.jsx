import React from 'react'
import './Rating.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";



const stars = [
    { active: false },
    { active: false },
    { active: false },
    { active: false },
    { active: false },
];

const Rating = ({size}) => {
    const [starArray, setStarArray] = useState(JSON.parse(JSON.stringify(stars)));
    const [starAmount, setStarAmount] = useState(0);

    const myComponentStyle = {
      fontSize: size,
   }

    function starHover(index){
      setStarArray(() => {
        let newArray = JSON.parse((JSON.stringify(stars)));
        
        for(let i = 0; i < index; i++ ){
          newArray[i].active = true;
        }

        return newArray;
      });
    }

    function starReset(index){
      setStarArray(() => {
        let newArray = JSON.parse((JSON.stringify(stars)));
        
        for(let i = 0; i < index; i++ ){
          newArray[i].active = true;
        }

        return newArray;
      });
    }

    function starClick(index){
      setStarAmount((prev => index));
      
      starReset(index);
    }

    console.log(starArray);
  return (
    <div className='star-rating'>
        {starArray.map( (star, index) => {
          console.log(star);
          return (
            <FontAwesomeIcon className={
              `star ${star.active ? 'active' : ''}`
            } 
            style={myComponentStyle}
            icon={faStar} 
            onMouseEnter={() => starHover(index + 1)}
            onMouseLeave={() => starReset(starAmount)}
            onClick={() => starClick(index + 1)}
            />
          )
        })}
    </div>
  )
}

export default Rating