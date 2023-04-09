// import { Card } from '@mui/material';
import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import './Home.css';
import Card from "./Card";
import Footer from "./Footer";

import p1 from "../assets/baba.webp";
import p2 from "../assets/baba1.webp";
import p3 from "../assets/kkrishna.jpg";
import p4 from "../assets/p4.jpg";
import Advantages from './Advantages';

const Home = () => {
  return (
    <div className='home'>
        <Banner></Banner>
     <div className="home__categories">
       <div style={{display:'flex',alignItems:"flex-end",justifyContent:"center",flexDirection:"column" , marginTop:"180px" ,marginBottom:"90px",height:"15vh"}} >
          <div style={{background:"#EB8A04",height:"170px",width:"50%",zIndex:"-1",position:"absolute"}}>
            
          </div>
          <div style={{ display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",background:"transparent",zIndex:"1",marginRight:"480px" }} >
               <h1 style={{color:"blue",marginBottom:"0px" }} className='quote__h1' > Full service ,at your disposal </h1>
               <h4 style={{ display:"flex",alignItems:"center",justifyContent:"center",     color:'gray',marginBottom:"0px"}} className='quote__h1' >More than you can Imagine  </h4>    
          </div>

        </div>

        <Categories /> 
        <div style={{display:'flex',alignItems:"center",justifyContent:"center",flexDirection:"column" , marginTop:"60px" ,marginBottom:"120px",height:"15vh"}} >
          <div style={{background:"#EB8A04",height:"170px",width:"50%",zIndex:"-1",position:"absolute"}}>
            
          </div>
          <div style={{ display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",background:"transparent",zIndex:"1",marginRight:"480px" }} >
               <h1 style={{color:"blue",marginBottom:"0px" }} className='quote__h1' > 
               Choose What's Best for You
                </h1>
               <h4 style={{ display:"flex",alignItems:"center",justifyContent:"center",     color:'gray',marginBottom:"0px"}} className='quote__h1' > 
                  Make Your vaction Comfortable.
                </h4>    
          </div>

        </div>
      </div>
          <div className="home__section">
            <Card  src={p1} title="Hotel krishna by RCG Hotels" description="Start your weekend at the Hotel Krishna by RCG Hotels with a full breakfast, then visit the Museum and art Gallery, home to a beautiful collection of historical  documents , Indian art and a beautiful exhibition on the regin 's history. " />
            <Card  src={p2} title="Hotel krishna by RCG Hotels" description="Start your weekend at the Hotel Krishna by RCG Hotels with a full breakfast, then visit the Museum and art Gallery, home to a beautiful collection of historical  documents , Indian art and a beautiful exhibition on the regin 's history. " />
            <Card  src={p3} title="Hotel krishna by RCG Hotels" description="Start your weekend at the Hotel Krishna by RCG Hotels with a full breakfast, then visit the Museum and art Gallery, home to a beautiful collection of historical  documents , Indian art and a beautiful exhibition on the regin 's history. " />
            <Card  src={p3} title="Hotel krishna by RCG Hotels" description="Start your weekend at the Hotel Krishna by RCG Hotels with a full breakfast, then visit the Museum and art Gallery, home to a beautiful collection of historical  documents , Indian art and a beautiful exhibition on the regin 's history. " />
          </div>

          <div>
            <h1 className='quotes__card' >  
                RCG Hotels stand as true paragon of world class hospitality and have some of the best luxury hotels and resorts in India, Book handpicked hotels with certified quality.
            </h1>

          </div>
          <div style={ {display:'flex',alignItems:"flex-end",justifyContent:"center",flexDirection:"column" , marginTop:"60px" ,marginBottom:"120px",height:"15vh"}} >
          <div style={{background:"#EB8A04",height:"170px",width:"50%",zIndex:"-1",position:"absolute"}}>
            
          </div>
          <div style={{ display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",background:"transparent",zIndex:"1",marginRight:"480px" }} >
               
               <h1 style={{color:"blue",marginBottom:"0px" }} className='quote__h1' > 
               Luxury Redefined 
                </h1>
               
               <h4 style={{ display:"flex",alignItems:"center",justifyContent:"center",     color:'gray',marginBottom:"0px"}} className='quote__h1' > 
                  Luxury is Personal 
                </h4>    
          </div>

        </div>

        <div className="some__quotes">
           <h4>
            RCG Hotels stand as a true paragon of world class hospitality and have some of the luxury hotels and resorts in India. They  are synonymous with excellence in hospitality and being able to offer unforgettable holiday and stay experiences to guests in the most exquiste seetins. Withe "Stay with us, Stay with nature" being the sustained outlook of this luxury hotel chain, a stay at any of its propertie truly brings guests closer to sense of wellbeing and oneness with nature. RCG Hotels offers a safe and  secure environment, authentic hospitality,thoughtful, service, lavish accomodation and world class facilities.
           </h4>

        </div>

        <Advantages/>

        <div style={{display:'flex',alignItems:"center",justifyContent:"center",flexDirection:"column" , marginTop:"60px" ,marginBottom:"120px",height:"15vh"}} >
          <div style={{background:"#EB8A04",height:"170px",width:"50%",zIndex:"-1",position:"absolute"}}>
            
          </div>
          <div style={{ display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",background:"transparent",zIndex:"1",marginRight:"480px" }} >
               <h1 style={{color:"blue",marginBottom:"0px" }} className='quote__h1' > 
               They Loved Our Hospitality .
                </h1>
               <h4 style={{ display:"flex",alignItems:"center",justifyContent:"center",     color:'gray',marginBottom:"0px"}} className='quote__h1' > 
                  Explore the world with Ease.
                </h4>    
          </div>  

        </div>
        <Footer/>


    </div>
  )
}

export default Home;