import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const SpeciCat = () => {
    const location =useLocation();
    const data=location.state.item
    const navigate=useNavigate();



    const[datash,setDatash]=useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data.strCategory}`)
            .then(res => res.json())
            .then(d => {
                setDatash(d.meals); // Fixed: Correctly update the state
                console.log(d.meals);
            });
    }, []); // Added data.strCategory to the dependencies array
    
  return (
    <div className='Spc'>
        <section>
            <div className="right">
                <img src={data.strCategoryThumb} width={'100%'} alt="" />
            </div>
            <div className="left">
                <h1>{data.strCategory}</h1>
                <p>{data.strCategoryDescription}</p>
            </div>
        </section>

       <br />
       <section className='sec2'>
        {datash.map((item)=>{
            return(
                <div className='secdiv' key={item.idMeal}>
                    <img onClick={()=>navigate('/meal',{state:{item}})} src={item.strMealThumb} height={'200px'} width={'200px'} alt="" />
                    <p>{item.strMeal}</p>
                </div>
            )
        })}
       </section>
    </div>
  )
}

export default SpeciCat