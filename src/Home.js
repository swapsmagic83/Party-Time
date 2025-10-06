import React, {useState} from "react";
import {  Routes, Route, useLocation} from 'react-router-dom';
import NavBar from "./NavBar";
import BirthdayCardsList from "./BirthdayCardsList";
import GraduationCardsList from "./GraduationCardsList";
import Card from './Card';
import HalloweenCardsList from "./HalloweenCardsList";
import ResultCard from "./ResultCard";
const Home = () =>{
    const location = useLocation()
    const [selectedCard, setSelectedCard] = useState('')
    
    return (
        <>
        {/* {location.pathname !=="/view" && <NavBar />}  */}
        {/* <NavBar/> */}
        <Routes>
          
          <Route path="/" element={<h1 className="Card-h1">Invite people to the event!!!</h1>}></Route>
          <Route path='/birthday' element={<BirthdayCardsList setSelectedCard={setSelectedCard} />}></Route>
          <Route path='/edit' element={<Card selectedCard={selectedCard} />}></Route>
          <Route path='/graduation' element={<GraduationCardsList setSelectedCard={setSelectedCard}/>}></Route>
          <Route path='/halloween' element={<HalloweenCardsList setSelectedCard={setSelectedCard}/>}></Route>
          <Route path="/view" element={<ResultCard />}></Route>
          
        </Routes>
      
        
        </>
    )
}
export default Home;