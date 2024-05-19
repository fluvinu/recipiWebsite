import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'

const Meal = () => {
    const location =useLocation();
    const data=location.state.item

    const [datas,setDatas]=useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.idMeal}`)
        .then(res=>res.json())
        .then(d=>{
            setDatas(d.meals)
            console.log(d.meals)
        })
    },[])
  return (
    <div>
        <section style={{display:'flex', alignItems:'center', justifyContent:'space-around',width:'100vw',paddingBottom:'100px'}} className='sec2'>
            <h1 >{data.strMeal}</h1>
            <img src={data.strMealThumb} alt="" />
        </section>
        {
            datas.map((item)=>{
                return(
                    <center>
                        <aside key={item.idMeal}>
                            <h2>Video demostration</h2>
                            <ReactPlayer controls url={item.strYoutube} />
                            <h1>{item.strMeal}</h1>
                            <h1>{item.strCategory}</h1>
                            <p style={{margin:'20px'}}>{item.strInstructions}</p>
                            <p>{item.strArea}</p>
                        </aside>
                    </center>
                    
                )
            })
        }
    </div>
  )
}

export default Meal