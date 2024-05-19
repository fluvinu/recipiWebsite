import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Racipi Project/Home';
import Navbar from './Racipi Project/Navbar';
import About from './Racipi Project/About';
import SpeciCat from './Racipi Project/SpeciCat';
import Meal from './Racipi Project/Meal';
const App = () => {
  return (
    <div>
     
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/specicat' element={<SpeciCat/>}></Route>
          <Route path='/meal' element={<Meal/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
