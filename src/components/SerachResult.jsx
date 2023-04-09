import React from 'react';
import "./SearchReasult.css";
import { StarIcon } from "@mui/material";

const SerachResult = ({img,location,title,description,star,price,total,book}) => {
  return (
    <div className='searchresult' >
      <img src={img} alt="" />
      <div className="searchresult__info">
        <div className="searchresult__infotop">
          <p>{location} </p>
          <h3> {title} </h3>
          <p>-------</p>
          <p> {description} </p>
        </div>
        <div className="searchresult__infobottom">
          <div className="searchresult__stars">
            {/* <StarIcon className="searchresult__star" /> */}
          
          <p>
             <strong>
                {star}
             </strong>
          </p>

        </div>
        <div className="searchresults__price">
          <h2> ${price}/night </h2>
          <p>${total}total </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SerachResult;