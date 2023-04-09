import React,{useState} from 'react';
import  './SearchPage.css';
import { Button } from "@mui/material";
import SearchResult from './SerachResult';

// import * as firebase from "firebase"
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import { auth } from './firepart';

const rooms =[
    {
        img:"https://images.getaroom-cdn.com/image/upload/s--ZmkloiIq--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1665801599/d1217817a89293ec4f397303a50946c5cc6676c3?atc=bc5da95f",
        location:"mumbai",
        title:'two rooms',
        description:'nice place',
        star:"4",
        price:"23",
        total:'233'
    },
    {
        img:"https://images.getaroom-cdn.com/image/upload/s--1h8Z1jl_--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1665801598/25d66c20ae906956447c5cdcdc8772205b9aee9e?atc=bc5da95f",
        location:"mumbai",
        title:'two rooms',
        description:'nice place',
        star:"4",
        price:"23",
        total:'233'
    },
    {
        img:"https://images.getaroom-cdn.com/image/upload/s--1h8Z1jl_--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1665801598/25d66c20ae906956447c5cdcdc8772205b9aee9e?atc=bc5da95f",
        location:"mumbai",
        title:'two rooms',
        description:'nice place',
        star:"4",
        price:"23",
        total:'233'
    }
]




const SearchPage = () => {
    //   const [userData,setUserData]=useState([]);
    const email=firebase.auth().currentUser?.email;
    // const email=auth().currentUser?.email;

  return (
    <div className="searchpage">
        <div className="searchpage__data">
            {/* <Button variend="outlined">
                USER NAME  
            </Button> */}
            <Button variend="outlined">
                {email}
            </Button>
            {/* <SearchResult    /> */}
            {
                rooms.map((data,index)=>(
                    <SearchResult 
                    key={index}
                    img={data.img}
                    price={data.price}
                    location={data.location}
                    title={data.title}
                    description={data.description}
                    total={data.total}

                    />
                ))
            }

        </div>
    </div>
  )
}

export default SearchPage ;