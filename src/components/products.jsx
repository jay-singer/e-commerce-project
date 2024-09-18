import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Products = () => {
    const{products,setProducts} = useState([]);

    const loadingProduct = async() =>{
    try{
     const response = await axios.get(`http://localhost:3000/products`)
    }catch(error){

    }
    }

    useEffect(() =>{
   loadingProduct()
    },[])
  return (
    <div>

    </div>
  )
}

export default Products