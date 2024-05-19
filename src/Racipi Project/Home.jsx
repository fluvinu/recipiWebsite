import React, { useEffect, useState } from 'react'
import Catogary from './Catogary';
const Home = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res=>res.json())
        .then(d=>setData(d.meals))
    },[])
  return (
    <div className='Home'>
        {
            data.map((item)=>{
                return(
                    <div className="cards" key={item.idMeal} style={{display:'flex',justifyContent:'space-around',}}>
                        <div className="right">
                            <h1 className='h11'> todays special</h1>
                            <h1 className='h11' style={{color:'orange'}}>{item.strMeal}</h1>
                            <h1 className='h11'>{item.strArea}</h1>
                        </div>
                        <div className="left">
                            <img src={item.strMealThumb} style={{width:'400px' ,height:'400px', borderRadius:'50%'}} alt="" />
                        </div>
                    </div>
                )
                
            }) 
        }
        
        <Catogary/>
      
    </div>
  )
}

export default Home
