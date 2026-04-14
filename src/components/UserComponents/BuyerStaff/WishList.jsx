import React, { useEffect } from 'react'
import { effect } from 'zod'


useEffect (()=>{
   
       const fetchingData = async () => {
        try{
 const baseUrl = "http://localhost:3000/products";
   const response = await fetch(baseUrl);
   const data = response.json;
   console.log(data,"this is data")
  }catch(error){
    console.log(error);
  }
        }
  
fetchingData();
},[])

const WishList = () => {
  return (
    <div className='  md:mt-[130px]'>
    skdjfkdj

      hello
    </div>
  )
}

export default WishList
