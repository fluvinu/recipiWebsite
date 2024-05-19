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
        <section className='sec2'>
            <h1>{data.strMeal}</h1>
            <img src={data.strMealThumb} alt="" />
        </section>
        {
            datas.map((item)=>{
                return(
                    <aside key={item.idMeal}>
                        <ReactPlayer controls url={item.strYoutube} />
                        <h1>{item.strMeal}</h1>
                        <h1>{item.strCategory}</h1>
                        <p>{item.strInstructions}</p>
                        <p>{item.strArea}</p>
                        

                    </aside>
                )
            })
        }
    </div>
  )
}

export default Meal