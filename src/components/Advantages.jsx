import React from 'react';
import "./Advantages.css";

import seven from "../assets/six.webp"; 
import six from "../assets/seven.jpg"; 
import eight from "../assets/eight.png"; 
import nine from "../assets/nine.jpg"; 
import ten from "../assets/ten.png"; 

const items =[
  {
    image:six,
    text:"BREAKFAST",
    subtext:'There has never been a sadness that can not ne cured with breakfast foods. '
  },
  {
    image:seven,
    text:"WIFI",
    subtext:'Get the best wifi connectivity without any interference. '
  },
  {
    image:eight ,
    text:"PICKUP",
    subtext:'Ride out of town at affordable one-way  and round-trip fares with us intercity travel service '
  },
  {
    image:nine,
    text:"AIR TICKETS",
    subtext:'Flight booking, cheap air tickets of domestic & international airlines with us.'
  },
  {
    image:ten,
    text:"FREE PARKING",
    subtext:'Free Parking will be provided, fell like Home. '
  }
]

const Advantages = () => {
  return (
    <div className='advantages'>
      <div className="advantages__info">
        <div className="adv__header">
          <h1>
            Advantages of staying with Us 
          </h1>
          <h4>  Sapien gravida dolor commodo </h4>
        </div>
        <div style={{justifyContent:'center' ,marginTop:'5px'} } >
          { items.map((item,index)=>(
            <div key={index} style={{alignItems:'center',
            marginRight:'30',display:'flex',marginLeft:'143px'}} > 
             <img src={items[index].image} className='adv__img'  alt="" />
              
              <div>
              <h5 className='adv__h5' >
                {items[index].text}
              </h5>
              <h5 className="adv__h">
                {items[index].subtext}
              </h5>
              </div>

             </div>
          )) }

        </div>
      </div>
    </div>
  )
}

export default Advantages;