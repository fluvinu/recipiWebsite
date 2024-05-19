import React, { useEffect, useState } from 'react'
import Catogary from './Catogary';
import './Home.css';
import './Catogary.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const [data, setData] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(d => setData(d.meals))
    }, [])
    return (
        <div className='Home'>
            {
                data.map((item) => {
                    return (
                        <div className="cards" key={item.idMeal} style={{ display: 'flex', justifyContent: 'space-around', }}>


                            <div className="left">
                                <img onClick={()=>navigate('/specicat',{state:{item}})} src={item.strMealThumb} style={{ width: '50%', borderRadius: '50%' }} alt="hello" />

                            </div>

                            <div className="right">
                                <h1 className='h11'> todays special</h1>
                                <h1 className='h11' style={{ color: 'orange' }}>{item.strMeal}</h1>
                                <h1 className='h11'>{item.strArea}</h1>
                            </div>



                        </div>
                    )

                })
            }

            <Catogary />

        </div>
    )
}

export default Home
