import React, { useEffect,useState } from 'react'

import './Catogary.css'
import { useNavigate } from 'react-router-dom'
const Catogary = () => {
    const [cat,setCat]=useState([])
    const navigate=useNavigate();
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(d=>setCat(d.categories))
    })
  return (
    <div className='Category'>
        <h1>Category</h1>
        <section className='Categoryssss'>
            {
                cat.map((item)=>{
                    return(
                        <div className="cards" key={item.idCategory}>
                            <img onClick={()=>navigate('/specicat',{state:{item}})} className='img2' src={item.strCategoryThumb} height={'250px'} width={'250px'} style={{borderRadius:'50%'}} alt="" />
                        </div>
                    )
                })
            }
        </section>

    </div>

  )
}

export default Catogary