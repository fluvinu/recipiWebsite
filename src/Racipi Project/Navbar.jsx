import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='Navbar'>
        <nav>
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR90odnAyfjLDbG7u6m-1v7pBTJc7CLKOQTv2MjOaxF7Q&s" width={"100px"} height={"100px"} alt="" />
            </div>
            <div className="Link">
                <Link to={'/'}> Home </Link>
                <input type="text" placeholder='search rechipes' />
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
