import React ,{useEffect, useState} from 'react';

import './Header.css';
// import Logo from "../assets/logo.png";
import Logo from "../assets/DS.png";
import { Button, Input } from  "@mui/material";

import { Link,useNavigate } from 'react-router-dom';

import {auth,db} from "./firepart";
// import Modal from "@mui/material";
// import {makeStyles} from "@mui/material";



import Modal from '@mui/material/Modal'
// import { makeStyles } from '@mui/material/styles'
import styled from '@emotion/styled';


function getModalStyle(){
  const top=50;
  const left=50;

  return {
    top:`${top}%`,
    left:`${left}%`,
    transform:`translate(-${top}%,${left}%)`,
  };
}

const usestyles = styled((theme)=>({
  paper:{
    position:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    width:400,
    bgcolor:"background.paper",
    border:"2px solid gray",
    boxShadow:24,
    p:4,

  },
}));


const Header = () => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  const classes=usestyles();
  const[modelStyle]=useState(getModalStyle);
  
  const [openSignin,setOpenSignin]=useState(false);
  const[user,setUser]=useState(null);
  const [open,setOpen]=useState(false);

  useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        setUser(authUser);
      }
      else{
        setUser(null);
      }
    })
  },[user,email])

  const signUP =async (event)=>{
    event.preventDefault();
    try{
      const authUser=await auth.createUserWithEmailAndPassword(email,password)
      db.collection("users").doc(authUser.email).set({
        owner_uis:authUser.uid,
        email:authUser.email, 
      })
    }catch(error){
      alert(error.message)
    }
    setOpen(false);
  }

  const signIn=async (event)=>{
    event.preventDefault();
    try{
      const authUser=await auth.createUserWithEmailPassword(email,password)
      db.collection("users").doc(authUser.email).set({
        owner_uis:authUser.uid,
        email:authUser.email, 
      })
    }catch(error){
      alert(error.message)
    }
    setOpen(false);
  }


  return (
    <div className='header'>
             
             <Modal className="modal" open={open} onClose={()=>setOpen(false)}>
              <div style={modelStyle} className={classes.paper} >
                <form  className='app__signup'style={{padding:"50px"}} >
                  <Input placeholder='email' type='text'value={password} onChange={(e)=>setEmail(e.target.value)}   />
                  <Input placeholder='password' type='password'value={password} onChange={(e)=>setPassword(e.target.value)}   />

                  <Button type="submit" onClick={signUP} style={{backgroundColor:'gray'}} > Sign Up  </Button>

                </form>

              </div>
             </Modal>
             <Modal  open={openSignin} onClose={()=>openSignin(false)}>
              <div style={modelStyle} className={classes.paper} >
                <form  className='app__signup'style={{padding:"50px"}} >
                  <Input placeholder='email' type='text'value={password} onChange={(e)=>setEmail(e.target.value)}   />
                  <Input placeholder='password' type='password'value={password} onChange={(e)=>setPassword(e.target.value)}   />

                  <Button type="submit" onClick={signIn} style={{backgroundColor:'gray'}} >Sign In </Button>

                </form>

              </div>
             </Modal>
          
         <Link to="/" style={{textDecoration:'none'}} >
         <img src={Logo} alt='' className='header__logo' />  
         </Link>
        
        <div className="header__center">
                <div className="center__button"> Home  </div>
                <div className="center__button"> Rooms & Suits </div>
                <div className="center__button"> Offers  </div>
                <div className="center__button">My Bookings </div>
                <div className="center__button"> Profile </div>
        </div>
        <div className="header__right">
          {user ? (
                   <div className="headerContainer"> 
                   <Button className='header__button' onClick={()=>auth.signOut()}  > Log Out </Button>
                </div>
              
          ):(
           <>
            <div className="headerContainer"> 
            <Button className='header__button'  onClick={()=>setOpen(true)} > Sign 
             UP </Button>
         </div>
         <div className="headerContainer"> 
            <Button className='header__button' onClick={()=>setOpen(true)}  > Log In  </Button>
         </div>
           </>
          )

          }
        </div>
        
    </div>
  )
}

export default Header;