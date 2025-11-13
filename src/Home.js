import React, {useState, useEffect} from "react";
import {  Routes, Route, useLocation} from 'react-router-dom';
import NavBar from "./NavBar";
import BirthdayCardsList from "./BirthdayCardsList";
import GraduationCardsList from "./GraduationCardsList";
import Card from './Card';
import HalloweenCardsList from "./HalloweenCardsList";
import ResultCard from "./ResultCard";

const Home = () =>{
    const [selectedCard, setSelectedCard] = useState('');
    const [inviteId,setInviteId] = useState(null);
    
    useEffect(() =>{
      const card = localStorage.getItem('selectedCard');
      if(card){
        setSelectedCard(JSON.parse(card));
      }
    },[]);
    return (
        <>
        {/* <HostPage /> */}
        <Routes>
          
          <Route path="/" element={
            <div>
              <h1 className="Card-h1">Create new event!!!</h1>
              </div>}> </Route>;
          <Route path='/birthday' element={<BirthdayCardsList setSelectedCard={setSelectedCard} />}></Route>;
          <Route path='/edit' element={<Card selectedCard={selectedCard} setInviteId={setInviteId} inviteId={inviteId}/>}></Route>;
          <Route path='/graduation' element={<GraduationCardsList setSelectedCard={setSelectedCard}/>}></Route>;
          <Route path='/halloween' element={<HalloweenCardsList setSelectedCard={setSelectedCard}/>}></Route>;
          <Route path="/events/view/:inviteId" element={<ResultCard />}></Route>;
          {/* <Route path="/events/:email" element={<HostPage/>}></Route> */}
        </Routes>
      
        
        </>
    )
}
export default Home;