// import React from 'react';
import React,{useState,useEffect} from 'react';
import './Banner.css';
// import { Button } from "@mui/material ";
import { Button } from  "@mui/material";

import vector from "../assets/date.jpg";

import {useNavigate} from "react-router-dom";


import adult from "../assets/boy.webp";
import girl from "../assets/girl.webp";
import {format} from "date-fns";
import {DateRange} from "react-date-range";
// import {db,firebase} from "./firebase";


import firebase from 'firebase/compat/app';
// import * as firebase from "firebase"
// import firebase from "firebase";
import {db} from "./firepart";

import { auth } from './firepart';

const Banner = () => {
       
      //  const [userData,setUserData]=useState([]);
       const email=firebase.auth().currentUser?.email;

      //  const email=auth().currentUser?.email;

     const navigate=useNavigate();

         const [ date,setDate ]=useState([
          {
            startDate:new Date(),
            endDate:new Date(),
            key:"selection",
          },
         ]);
    
         const [options ,setOptions]=useState({
          adult:1,
          children:0,
         })
         const [showSearch,setShowSearch]=useState(false);
         const handleOption=(name,operation)=>{
          setOptions((prev)=>{
            return{
              ...prev,
              [name]:operation==="i"?options[name] +1 :options[name] - 1,
            }
          })
         }
          const handle=()=>{
             
                navigate("/search");
              

          
          }

  return (
    <>
    <div className='banner'>
            <div className="banner__search">
            {
              showSearch &&  <DateRange 
              editableDateInputs={true}
              onChange={(item)=>setDate([item.selection ])}
              moveRangeOnFirstSelection={false}

              ranges={date}
              className='date'
              minDate={new Date()}
              
              />
            }
            </div>
        <div className="banner__info">
            <h4> Enjoy Your Vaction with RCG Hotels </h4>
            <h1 style={{ marginTop:"0px",color:"#EB8A04" ,}}> Let us plan a perfect International Holiday for you </h1>
            <Button onClick={handle}>Explore Now</Button>
        </div>
    </div>
    <div className="booking__div">
      <div className="booking">
        <div  style={ { display:"flex " , alignItem:"center" ,flexDirection:"row" ,        justifyContent:"center"} }  >
             <div className="banner__main__div">
                <div className="booking__header">

                <img src={vector} alt='' className='booking__vector'  />

                <h4> Arrival Date </h4>
                <img className='booking__vector2' src='https://img.icons8.com/ios-filled/24/000000/sort-down.png'    onClick={()=>setShowSearch(true)}   />
                </div>

                
                <div className="booking__bof">
                  <h2> {`${format(date[0].startDate,"dd MMM")}`}  </h2>
                  <h4> {`${format(date[0].startDate,"EEE")}`} </h4>
               
                </div>
             </div>
             <div className="banner__main__div">
                <div className="booking__header">

                <img src={vector} alt='' className='booking__vector' />

                <h4> Check Out </h4>
                <img className='booking__vector2' src='https://img.icons8.com/ios-filled/24/000000/sort-down.png'    onClick={()=>setShowSearch(false )} />
                </div>

                
                <div className="booking__bof">
                <h2> {`${format(date[0].endDate,"dd MMM")}`}  </h2>
                  <h4> {`${format(date[0].endDate,"EEE")}`} </h4>
               
               
                </div>
             </div>
             <div className="banner__main__div">
                <div className="booking__header">

                <img src={adult} alt='' className='booking__vector' />

                <h4> Adults </h4>
                </div>
                <div className='booking__bo'>
                  {/* <h2> {`$ {options.adult} `} </h2> */}
                  <h2> {`${options.adult}`} </h2>
                       <div className='booking__noooo'>
                       <div onClick={()=> handleOption("adult","i")} >
                     <img src="https://img.icons8.com/material/24/000000/sort-up--v2.png" alt=""   style={ {height:"28px" } } />
                  </div>
                  <div >
                    <button style={{border:"none",background:"transparent"}} disabled={options.adult<=1}  onClick={()=> handleOption("adult","d")}>
                      <img src="https://img.icons8.com/ios-filled/24/000000/sort-down.png" alt="" style={{height:"24px"}} />
                    </button>
                  </div>
                       </div>
                </div>
               
             </div>
             <div className="banner__main__div">
                <div className="booking__header">

                <img src={girl} alt='' className='booking__vector' />

                <h4> Children  </h4>
                {/* <img className='booking__vector2' src='https://img.icons8.com/ios-filled/24/000000/sort-down.png'     /> */}
                 </div>
                <div className='booking__bo'>
                  <h2> {`${options.children}`} </h2>
                       <div className="booking__noooo">
                       <div  onClick={()=> handleOption("children","i")}>
                     <img src="https://img.icons8.com/material/24/000000/sort-up--v2.png" alt=""   style={ {height:"28px" } } />
                  </div>
                  <div>
                    <button style={{border:"none",background:"transparent"}} disabled={options.children<=0}  onClick={()=> handleOption("children","d")} >
                      <img src="https://img.icons8.com/ios-filled/24/000000/sort-down.png" alt="" style={{height:"24px"}} />
                    </button>
                  </div>
                </div>
                       </div>
                </div>
                <div className="banner__main__div"   style={{paddingTop:"0px"}}>
                  <h4 className='fadded__text'>
                    Hope You Have A Nice Experience ...
                  </h4>
                  <div className="booking__button">
                    <button onClick={handle} > Check Availability  </button>
                  </div>
                </div>


        </div>
      </div>
        
    </div>

     </>

  )
}

export default Banner;