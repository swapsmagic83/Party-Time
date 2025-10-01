import React, {useState} from "react";
import {  Routes, Route } from 'react-router-dom';
import BirthdayCardsList from "./BirthdayCardsList";
import GraduationCardsList from "./GraduationCardsList";
import Card from './Card';
import HalloweenCardsList from "./HalloweenCardsList";
const Home = () =>{
    const [selectedCard, setSelectedCard] = useState('')
    
    return (
        <>
        
        <Routes>
          <Route path="/" element={<h1 className="Card-h1">Invite people to the event!!!</h1>}></Route>
          <Route path='/birthday' element={<BirthdayCardsList setSelectedCard={setSelectedCard} />}></Route>
          <Route path='/edit' element={<Card selectedCard={selectedCard} />}></Route>
          <Route path='/graduation' element={<GraduationCardsList setSelectedCard={setSelectedCard}/>}></Route>
          <Route path='/halloween' element={<HalloweenCardsList setSelectedCard={setSelectedCard}/>}></Route>
        </Routes>
      
        
        </>
    )
}
export default Home;