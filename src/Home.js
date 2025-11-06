import React, {useState, useEffect} from "react";
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
    const [inviteId,setInviteId] = useState(null)
    // localStorage.removeItem('eventCardData');
    //     localStorage.removeItem('hostDetails');
    //     localStorage.removeItem('stage');
    //     localStorage.removeItem('selectedCard')
  //saving selectedCard in localStorage
    useEffect(() =>{
      const card = localStorage.getItem('selectedCard')
      if(card){
        setSelectedCard(JSON.parse(card))
        console.log('in home.js',card)
      }
    },[])
    return (
        <>
        
        <Routes>
          
          <Route path="/" element={<h1 className="Card-h1">Invite people to the event!!!</h1>}></Route>
          <Route path='/birthday' element={<BirthdayCardsList setSelectedCard={setSelectedCard} />}></Route>
          <Route path='/edit' element={<Card selectedCard={selectedCard} setInviteId={setInviteId} inviteId={inviteId}/>}></Route>
          <Route path='/graduation' element={<GraduationCardsList setSelectedCard={setSelectedCard}/>}></Route>
          <Route path='/halloween' element={<HalloweenCardsList setSelectedCard={setSelectedCard}/>}></Route>
          <Route path="/events/view/:inviteId" element={<ResultCard />}></Route>
          
        </Routes>
      
        
        </>
    )
}
export default Home;