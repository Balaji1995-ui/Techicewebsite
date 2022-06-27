import React from 'react'
import React, { useEffect } from 'react'
import axios from 'axios'
const production=()=>{
 const getproduction= async()=>{
     try {
         const data = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
       console.log(data)  
     } catch (error) {
         
        console.log(error)
     }
 }
useEffect(()=>{
    getproduction();
},[])
return(
    <div className='from-group'>
        <h1>Production Level</h1>

    </div>
)
}
export default production;